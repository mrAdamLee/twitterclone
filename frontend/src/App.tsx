import Avatar from './components/Avatar'
import Navbar from './components/Navbar'
import PostComposer from './components/PostComposer'
import Sidebar from './components/Sidebar'

type Post = {
  name: string
  handle: string
  time: string
  initials: string
  body: string
  replies: number
  reposts: number
  likes: number
}

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

function PostCard({ post }: { post: Post }) {
  return (
    <article className="border-b border-slate-200 px-5 py-5 transition-colors hover:bg-slate-50/70 sm:px-7">
      <div className="flex gap-3">
        <Avatar initials={post.initials} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 text-sm">
            <strong className="truncate text-slate-950">{post.name}</strong>
            <span className="truncate text-slate-500">{post.handle} · {post.time}</span>
            <button aria-label="More post options" className="ml-auto shrink-0 px-2 text-lg leading-none text-slate-400 hover:text-sky-600">...</button>
          </div>
          <p className="mt-2 text-[15px] leading-6 text-slate-800">{post.body}</p>
          <div className="mt-4 flex max-w-md justify-between text-sm text-slate-500">
            <button className="hover:text-sky-600">Reply <span className="ml-1">{post.replies}</span></button>
            <button className="hover:text-emerald-600">Repost <span className="ml-1">{post.reposts}</span></button>
            <button className="hover:text-rose-600">Like <span className="ml-1">{post.likes}</span></button>
            <button aria-label="Share post" className="hover:text-sky-600">Share</button>
          </div>
        </div>
      </div>
    </article>
  )
}

function App() {

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-slate-950">
      <Navbar />

      <main className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[180px_minmax(0,620px)_260px] lg:gap-8 lg:px-8">
        <Sidebar />

        <section className="min-h-screen border-x border-slate-200 bg-white">
          <div className="border-b border-slate-200 px-5 py-6 sm:px-7">
            <h1 className="text-xl font-black tracking-tight">Your feed</h1>
            <p className="mt-1 text-sm text-slate-500">A calm place for useful thoughts.</p>
            <PostComposer />
          </div>
          {posts.map((post) => <PostCard key={post.handle} post={post} />)}
        </section>

        <aside className="hidden pt-8 xl:block">
          <div className="sticky top-24 space-y-6">
            <label className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-slate-400 shadow-sm ring-1 ring-slate-200">
              <span aria-hidden="true">Search</span>
              <input aria-label="Search" className="min-w-0 flex-1 bg-transparent outline-none" placeholder="Search threadline" />
            </label>
            <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h2 className="font-black tracking-tight">Trending now</h2>
              <div className="mt-4 space-y-4">
                {['Design systems', 'Spring Boot', 'Build in public'].map((trend, index) => <div key={trend}><p className="text-xs text-slate-400">{index + 1} · Trending</p><p className="mt-1 text-sm font-bold">{trend}</p></div>)}
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default App
