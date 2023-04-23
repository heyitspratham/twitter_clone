import React from 'react'
import Post from '../Post'
import { useContext } from 'react'
import {TwiterContext} from '../../context/TwitterContext'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
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

const ProfileTweets = () => {

  const {currentUser, currentAccount} = useContext(TwiterContext);

  return (
    <div className={style.wrapper}>
      {currentUser.tweets.map((tweets, index)=>(
        <Post
          key={index}
          displayName={currentUser.name === 'Unnamed'? `${currentAccount.slice(0,4)}...${currentAccount.slice(-4)}`: currentUser.name}
          userName={`${currentAccount.slice(0,4)}...${currentAccount.slice(-4)}`}
          text = {tweets.tweet}
          avatar={currentUser.profileImage}
          isProfileImageNft={tweets.isProfileImageNft}
          timeStamp={tweets.timeStamp}
        />
      ))}
    </div>
  )
}

export default ProfileTweets