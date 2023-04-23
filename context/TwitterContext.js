import { createContext, useState, useEffect } from "react";
import {useRouter } from 'next/router';
import {client} from '../lib/client'

export const TwiterContext = createContext();

export const TwitterPovider = ({children}) =>{

    const router = useRouter();

    const [appStatus, setAppStatus] = useState();
    const [currentAccount, setCurrentAccount] = useState("")
    const [tweets, setTweets] = useState([])
    const [currentUser, setCurrentUser] = useState({})


    useEffect(() => {
      checkIfWalletIsConnected()
    }, [])
    
    useEffect(() => {
      if(!currentAccount && appStatus == 'connected') return
      getCurrentUserDetails();
      fetchTweets();
    },[currentAccount, appStatus])

    const checkIfWalletIsConnected = async () => {
        if (!window.ethereum) return setAppStatus('noMetaMask')
        try {
          const addressArray = await window.ethereum.request({
            method: 'eth_accounts',
          })
          if (addressArray.length > 0) {
            setAppStatus('connected')
            setCurrentAccount(addressArray[0])
            console.log("test===> ",addressArray[0])
    
            createUserAccount(addressArray[0])
          } else {
            router.push('/')
            setAppStatus('notConnected')
          }
        } catch (err) {
          router.push('/')
          setAppStatus('error')
        }
      }


    // Initialize MetaMask wallet Connection
    const connectTowallet = async () => {
        if (!window.ethereum) return setAppStatus('noMetaMask')
        try {
          setAppStatus('loading')
    
          const addressArray = await window.ethereum.request({
            method: 'eth_requestAccounts',
          })
    
          if (addressArray.length > 0) {
            setCurrentAccount(addressArray[0])
            console.log("test===> ",addressArray[0])

            createUserAccount(addressArray[0])
          } else {
            router.push('/')
            setAppStatus('notConnected')
          }
        } catch (err) {
          setAppStatus('error')
        }
      }

    /**
   * Creates an account in Sanity DB if the user does not already have one
   * @param {String} userAddress Wallet address of the currently logged in user
   */
  const createUserAccount = async (userAddress = currentAccount) => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const userDoc = {
        _type: 'users',
        _id: userAddress,
        name: 'Unnamed',
        isProfileImageNft: false,
        profileImage:
          'https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg',
        walletAddress: userAddress,
      }

      await client.createIfNotExists(userDoc)

      setAppStatus('connected')
    } catch (error) {
      router.push('/')
      setAppStatus('error')
    }
  }

  const fetchTweets = async () =>{
    const query = `
    *[_type == "tweets"]{
      "author": author->{name, walletAddress, profileImage, isProfileImageNft},
      tweet,
      timestamp
    }|order(timestamp desc)
    `

    const sanityResponse = await client.fetch(query);
    setTweets([]);

    sanityResponse.forEach(async (item)=>{
      const newItem = {
        tweet: item.tweet,
        timestamp: item.timestamp,
        author: {
          name: item.author.name,
          walletAddress: item.author.walletAddress,
          isProfileImageNft: item.author.isProfileImageNft,
          profileImage: item.author.profileImage,
        },
      }

      setTweets((prevState)=>[...prevState, newItem])
    })
  }

  const getCurrentUserDetails = async (userAccount = currentAccount) =>{
    if(appStatus!== 'connected') return

    const query = `
    *[_type=="users" && _id=="${userAccount}"]{
      "tweets": tweets[]->{timestamp, tweet}|order(timestamp desc),
      name,
      isProfileImageNft,
      profileImage,
      coverImage,
      walletAddress,
    }
    `
    const sanityResponse = await client.fetch(query);

    setCurrentUser({
      tweets: sanityResponse[0].tweets,
      name: sanityResponse[0].name,
      profileImage: sanityResponse[0].profileImage,
      isProfileImageNft: sanityResponse[0].isProfileImageNft,
      coverImage: sanityResponse[0].coverImage,
      walletAddress: sanityResponse[0].walletAddress,
    })

  }

    return(
        <TwiterContext.Provider value={{ appStatus, currentAccount, connectTowallet, fetchTweets, currentUser, tweets, currentUser, getCurrentUserDetails}} >
            {children}
        </TwiterContext.Provider>
    )
}