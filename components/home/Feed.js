import React from 'react'
import {BsStars} from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style ={
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`
}

const tweets =[ 
    {
        displayName: 'Pratham',
        userName : '0x365a4EFd1c8cd0B0c29480175285400E3F52f22e',
        avatar: 'https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg',
        text : 'gm',
        isProfileImageNft: false,
        timeStamp: '2021-06-01T12:00:00.000Z'
    },
    {
        displayName: 'Pratham',
        userName : '0x365a4EFd1c8cd0B0c29480175285400E3F52f22e',
        avatar: 'https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg',
        text : 'gm',
        isProfileImageNft: false,
        timeStamp: '2021-06-01T12:00:00.000Z'
    },
    {
        displayName: 'Pratham',
        userName : '0x365a4EFd1c8cd0B0c29480175285400E3F52f22e',
        avatar: 'https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg',
        text : 'gm',
        isProfileImageNft: false,
        timeStamp: '2021-06-01T12:00:00.000Z'
    },
    {
        displayName: 'Pratham',
        userName : '0x365a4EFd1c8cd0B0c29480175285400E3F52f22e',
        avatar: 'https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg',
        text : 'gm',
        isProfileImageNft: false,
        timeStamp: '2021-06-01T12:00:00.000Z'
    },
]

const Feed = ()=>{
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
                displayName = {tweet.displayName}
                userName = {`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
                avatar = {tweet.avatar}
                text = {tweet.text}
                isProfileI ageNft = {tweet.isProfileImageNft}
                timeStamp = {tweet.timeStamp}
                />
            ))}
        </div>
    )
}

export default Feed;
