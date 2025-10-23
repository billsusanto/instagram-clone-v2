import { User, Post, Comment, Story } from '@/lib/types'

// Generate mock users
const MOCK_USERS: User[] = [
  {
    id: '1',
    username: 'johndoe',
    fullName: 'John Doe',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=johndoe',
    bio: 'Photographer 📸 | Traveler ✈️ | Coffee lover ☕',
    verified: true,
    followerCount: 125000,
    followingCount: 450,
    postCount: 287,
    createdAt: new Date('2020-01-15').toISOString(),
  },
  {
    id: '2',
    username: 'jane_smith',
    fullName: 'Jane Smith',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=janesmith',
    bio: 'Digital artist 🎨 | UI/UX designer | Creating beautiful things',
    verified: false,
    followerCount: 45000,
    followingCount: 320,
    postCount: 156,
    createdAt: new Date('2019-06-20').toISOString(),
  },
  {
    id: '3',
    username: 'alex_chen',
    fullName: 'Alex Chen',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alexchen',
    bio: 'Software engineer 💻 | Building cool stuff | Tech enthusiast',
    verified: false,
    followerCount: 12500,
    followingCount: 890,
    postCount: 98,
    createdAt: new Date('2021-03-10').toISOString(),
  },
  {
    id: '4',
    username: 'emma_wilson',
    fullName: 'Emma Wilson',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emmawilson',
    bio: 'Fashion blogger 👗 | Style tips | NYC 🗽',
    verified: true,
    followerCount: 250000,
    followingCount: 1200,
    postCount: 445,
    createdAt: new Date('2018-09-05').toISOString(),
  },
  {
    id: '5',
    username: 'mike_johnson',
    fullName: 'Mike Johnson',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mikejohnson',
    bio: 'Fitness coach 💪 | Healthy lifestyle | DM for training',
    verified: false,
    followerCount: 67000,
    followingCount: 340,
    postCount: 523,
    createdAt: new Date('2020-07-22').toISOString(),
  },
  {
    id: '6',
    username: 'sarah_lee',
    fullName: 'Sarah Lee',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarahlee',
    bio: 'Food blogger 🍕 | Recipe creator | Foodie adventures',
    verified: false,
    followerCount: 89000,
    followingCount: 567,
    postCount: 678,
    createdAt: new Date('2019-11-30').toISOString(),
  },
  {
    id: '7',
    username: 'david_brown',
    fullName: 'David Brown',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=davidbrown',
    bio: 'Music producer 🎵 | Sound design | LA based',
    verified: true,
    followerCount: 340000,
    followingCount: 890,
    postCount: 234,
    createdAt: new Date('2017-04-12').toISOString(),
  },
  {
    id: '8',
    username: 'lisa_garcia',
    fullName: 'Lisa Garcia',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisagarcia',
    bio: 'Yoga instructor 🧘 | Mindfulness | Wellness advocate',
    verified: false,
    followerCount: 23000,
    followingCount: 456,
    postCount: 312,
    createdAt: new Date('2021-08-17').toISOString(),
  },
  {
    id: '9',
    username: 'tom_anderson',
    fullName: 'Tom Anderson',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tomanderson',
    bio: 'Adventure seeker 🏔️ | Nature photographer | Wanderlust',
    verified: false,
    followerCount: 156000,
    followingCount: 234,
    postCount: 567,
    createdAt: new Date('2018-12-03').toISOString(),
  },
  {
    id: '10',
    username: 'maria_rodriguez',
    fullName: 'Maria Rodriguez',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mariarodriguez',
    bio: 'Interior designer 🏠 | Home decor | Minimalist living',
    verified: false,
    followerCount: 78000,
    followingCount: 678,
    postCount: 423,
    createdAt: new Date('2020-02-28').toISOString(),
  },
]

// Generate more users (20 total)
for (let i = 11; i <= 25; i++) {
  MOCK_USERS.push({
    id: `${i}`,
    username: `user${i}`,
    fullName: `User ${i}`,
    avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`,
    bio: `Bio for user ${i}`,
    verified: false,
    followerCount: Math.floor(Math.random() * 50000) + 1000,
    followingCount: Math.floor(Math.random() * 1000) + 100,
    postCount: Math.floor(Math.random() * 200) + 10,
    createdAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString(),
  })
}

// Caption templates
const CAPTIONS = [
  'Beautiful day! ☀️',
  'Living my best life ✨',
  'Grateful for these moments 🙏',
  'New adventures await 🌍',
  'Making memories 📸',
  'Sunday vibes 😌',
  'Can\'t stop won\'t stop 💪',
  'Feeling inspired today 💫',
  'Just keep swimming 🏊',
  'Weekend mood 🎉',
  'Good times and tan lines 🌴',
  'Stay wild moon child 🌙',
  'Chasing sunsets 🌅',
  'Life is better when you\'re laughing 😂',
  'Dream big work hard ✨',
]

// Generate mock posts
const MOCK_POSTS: Post[] = []
const now = Date.now()

for (let i = 1; i <= 60; i++) {
  const user = MOCK_USERS[Math.floor(Math.random() * MOCK_USERS.length)]
  const imageCount = Math.random() > 0.7 ? Math.floor(Math.random() * 3) + 2 : 1
  const images = []
  
  for (let j = 0; j < imageCount; j++) {
    images.push({
      id: `img-${i}-${j}`,
      url: `https://picsum.photos/seed/${i}${j}/1080/1080`,
      altText: `Post image ${j + 1} by ${user.username}`,
      width: 1080,
      height: 1080,
    })
  }

  MOCK_POSTS.push({
    id: `${i}`,
    user,
    images,
    caption: CAPTIONS[Math.floor(Math.random() * CAPTIONS.length)] + (Math.random() > 0.5 ? ' #instagram #life #photography' : ''),
    location: Math.random() > 0.6 ? ['New York, NY', 'Los Angeles, CA', 'London, UK', 'Paris, France', 'Tokyo, Japan'][Math.floor(Math.random() * 5)] : undefined,
    likeCount: Math.floor(Math.random() * 10000) + 100,
    commentCount: Math.floor(Math.random() * 500) + 10,
    createdAt: new Date(now - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    likedByUser: Math.random() > 0.7,
    savedByUser: Math.random() > 0.8,
  })
}

// Sort posts by date (newest first)
MOCK_POSTS.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

// Generate mock comments
const COMMENT_TEXTS = [
  'Love this! 😍',
  'Amazing photo!',
  'So beautiful ❤️',
  'Incredible!',
  'This is perfect 👌',
  'Wow! 🤩',
  'Great shot!',
  'Stunning! ✨',
  'Goals! 💯',
  'Absolutely love this',
]

function generateCommentsForPost(postId: string): Comment[] {
  const commentCount = Math.floor(Math.random() * 10) + 3
  const comments: Comment[] = []
  
  for (let i = 0; i < commentCount; i++) {
    const user = MOCK_USERS[Math.floor(Math.random() * MOCK_USERS.length)]
    comments.push({
      id: `comment-${postId}-${i}`,
      postId,
      user,
      text: COMMENT_TEXTS[Math.floor(Math.random() * COMMENT_TEXTS.length)],
      likeCount: Math.floor(Math.random() * 100),
      createdAt: new Date(now - Math.random() * 24 * 60 * 60 * 1000).toISOString(),
      parentCommentId: null,
      likedByUser: Math.random() > 0.8,
    })
  }
  
  return comments
}

// Generate mock stories
const MOCK_STORIES: Story[] = []
const expirationTime = 24 * 60 * 60 * 1000 // 24 hours

for (let i = 0; i < 15; i++) {
  const user = MOCK_USERS[i]
  const createdAt = new Date(now - Math.random() * expirationTime * 0.8)
  
  MOCK_STORIES.push({
    id: `story-${i}`,
    user,
    mediaUrl: `https://picsum.photos/seed/story${i}/1080/1920`,
    mediaType: Math.random() > 0.7 ? 'video' : 'image',
    createdAt: createdAt.toISOString(),
    expiresAt: new Date(createdAt.getTime() + expirationTime).toISOString(),
    seenByUser: Math.random() > 0.5,
    viewerCount: Math.floor(Math.random() * 1000) + 50,
  })
}

export { MOCK_USERS, MOCK_POSTS, MOCK_STORIES, generateCommentsForPost }
