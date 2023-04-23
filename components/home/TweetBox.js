import React, {useState} from 'react';
import {BsCardImage, BsEmojiSmile} from 'react-icons/bs';
import {RiFileGifLine, RiBarChartHorizontalFill} from 'react-icons/ri';
import {IoMdCalendar} from 'react-icons/io';
import {MdOutlineLocationOn} from 'react-icons/md';
import {client} from "../../lib/client";
import {TwiterContext} from "../../context/TwitterContext"
import { useContext } from 'react';

const style = {
    icon: "mr-2 text-xl",
}

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('');
    const {currentAccount, currentUser, tweets, fetchTweets } = useContext(TwiterContext);

    const postTweet = async (event) =>{
        event.preventDefault();
        if(!tweetMessage) return;

        const tweetId = `${currentAccount}_${Date.now()}`

        const tweetDoc = {
            _type: 'tweets',
            _id: tweetId,
            tweet: tweetMessage,
            timestamp: new Date(Date.now()).toISOString(),
            author: {
                _key: tweetId,
                _type: 'reference',
                _ref: currentAccount 
            }
        }

        await client.createIfNotExists(tweetDoc)
        
        await client.patch(currentAccount).setIfMissing({tweets: []}).insert('after', 'tweets[-1]', [
            {
                _key: tweetId,
                _type: 'reference',
                _ref: tweetId,
            },
        ]).commit()

        await fetchTweets()
        setTweetMessage('');
    }

  return (
    <div className="px-4 flex flex-row border-b border-[#38444d] pb-4" >
        <div className="left mr-4">
            <img src={currentUser.profileImage} alt="profile-image" className={currentUser.isProfileImageNft? `h-12 w-12 rounded-full smallHex`: 'h-12 w-12 rounded-full'} />
        </div>
        <div className="right flex-1">
            <form>
                <textarea className="h-full w-full outline-none bg-transparent text-lg"
                placeholder="What's Happening "
                value={tweetMessage}
                onChange={(e) => {setTweetMessage(e.target.value)}}
                ></textarea>
                <div className="formLower flex">
                    <div className="iconContainer text-[#1d9bf0] flex flex-1 items-center">
                        <BsCardImage className={style.icon}/>
                        <RiFileGifLine className={style.icon}/>
                        <RiBarChartHorizontalFill className={style.icon}/>
                        <BsEmojiSmile className={style.icon}/>
                        <IoMdCalendar className={style.icon}/>
                        <MdOutlineLocationOn className={style.icon}/>
                    </div>
                    <div className="icon text-[#1d9bf0] flex flex-1 items-center "></div>
                    <button type='submit' className={`px-6 py-2 rounded-3xl font-bold ${tweetMessage? `bg-[#1d9bf0] text-white`: `bg-[#196195] text-[#95999e]`}`} onClick={(event) => postTweet(event)} >Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox