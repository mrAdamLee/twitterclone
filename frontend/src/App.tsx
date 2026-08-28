import Navbar from './components/Navbar'
import Feed from './components/Feed'
import type { Post } from './components/PostCard'
import RightSidebar from './components/RightSidebar'
import Sidebar from './components/Sidebar'

const posts: Post[] = [
  {
    name: 'Maya Chen',
    handle: '@mayacodes',
    time: '18m',
    initials: 'MC',
    body: 'The best interfaces get out of your way. They make the important thing feel obvious.',
    replies: 12,
    reposts: 38,
    likes: 284,
  },
  {
    name: 'Andre Lewis',
    handle: '@andrelew',
    time: '1h',
    initials: 'AL',
    body: 'Shipped a small improvement today that makes a surprisingly big difference. Those are the good ones.',
    replies: 7,
    reposts: 19,
    likes: 146,
  },
]

function App() {

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-slate-950">
      <Navbar />

      <main className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[180px_minmax(0,620px)_260px] lg:gap-8 lg:px-8">
        <Sidebar />

        <Feed posts={posts} />

        <RightSidebar />
      </main>
    </div>
  )
}

export default App
