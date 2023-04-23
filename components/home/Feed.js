import React from 'react'
import {BsStars} from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'
import { useContext } from 'react';
import {TwiterContext} from "../../context/TwitterContext";

const style ={
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`
}


// const tweets =[ 
//     {
//         displayName: 'Pratham',
//         userName : '0x365a4EFd1c8cd0B0c29480175285400E3F52f22e',
//         avatar: 'https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg',
//         text : 'gm',
//         isProfileImageNft: false,
//         timeStamp: '2021-06-01T12:00:00.000Z'
//     },
//     {
//         displayName: 'Pratham',
//         userName : '0x365a4EFd1c8cd0B0c29480175285400E3F52f22e',
//         avatar: 'https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg',
//         text : 'gm',
//         isProfileImageNft: false,
//         timeStamp: '2021-06-01T12:00:00.000Z'
//     },
//     {
//         displayName: 'Pratham',
//         userName : '0x365a4EFd1c8cd0B0c29480175285400E3F52f22e',
//         avatar: 'https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg',
//         text : 'gm',
//         isProfileImageNft: false,
//         timeStamp: '2021-06-01T12:00:00.000Z'
//     },
//     {
//         displayName: 'Pratham',
//         userName : '0x365a4EFd1c8cd0B0c29480175285400E3F52f22e',
//         avatar: 'https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg',
//         text : 'gm',
//         isProfileImageNft: false,
//         timeStamp: '2021-06-01T12:00:00.000Z'
//     },
// ]

const Feed = ()=>{

    const {tweets} = useContext(TwiterContext);


    return(
        <div className={style .wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStars/>
            </div>
            <TweetBox/>
            {tweets.map((tweet, index) =>(
                <Post
                key = {index}
                displayName = {tweet.author.name === 'Unnamed'? `${tweet.author.walletAddress.slice(0,4)}...${tweet.author.walletAddress.slice(-4)}`: tweet.author.name }
                userName = {`${tweet.author.walletAddress.slice(0,4)}...${tweet.author.walletAddress.slice(-4)}`}
                avatar = {tweet.author.profileImage}
                text = {tweet.tweet}
                isProfileImageNft = {tweet.isProfileImageNft}
                timeStamp = {tweet.timestamp}
                />
            ))}
        </div>
    )
}

export default Feed;
