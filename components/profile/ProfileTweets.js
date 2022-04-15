import React from 'react'
import Post from '../Post'

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
  return (
    <div className={style.wrapper}>
      {tweets.map((tweets, index)=>(
        <Post
          key={index}
          displayName={tweets.displayName}
          userName={`${tweets.userName.slice(0,4)}...${tweets.userName.slice(-4)}`}
          text = {tweets.text}
          avatar={tweets.avatar}
          isProfileImageNft={tweets.isProfileImageNft}
          timeStamp={tweets.timeStamp}
        />
      ))}
    </div>
  )
}

export default ProfileTweets