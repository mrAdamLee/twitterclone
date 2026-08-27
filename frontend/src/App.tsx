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

function Avatar({ initials, small = false }: { initials: string; small?: boolean }) {
  return (
    <div className={`grid shrink-0 place-items-center rounded-full bg-sky-100 font-bold text-sky-700 ${small ? 'size-9 text-xs' : 'size-11 text-sm'}`}>
      {initials}
    </div>
  )
}

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
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-xl bg-sky-500 text-lg font-black text-white">t</div>
            <span className="text-lg font-black tracking-tight">threadline</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-500 sm:inline">Good morning, Alex</span>
            <Avatar initials="AJ" small />
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[180px_minmax(0,620px)_260px] lg:gap-8 lg:px-8">
        <nav className="hidden pt-8 lg:block">
          <div className="sticky top-24 space-y-2">
            {['Home', 'Explore', 'Notifications', 'Messages', 'Bookmarks'].map((item, index) => (
              <button key={item} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold ${index === 0 ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-white hover:text-slate-950'}`}>
                <span className="w-5 text-center text-base">{['⌂', '#', '♡', '✉', '▱'][index]}</span>{item}
              </button>
            ))}
            <button className="mt-5 w-full rounded-xl bg-sky-500 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-sky-600">Post</button>
          </div>
        </nav>

        <section className="min-h-screen border-x border-slate-200 bg-white">
          <div className="border-b border-slate-200 px-5 py-6 sm:px-7">
            <h1 className="text-xl font-black tracking-tight">Your feed</h1>
            <p className="mt-1 text-sm text-slate-500">A calm place for useful thoughts.</p>
            <div className="mt-5 flex gap-3">
              <Avatar initials="AJ" />
              <div className="flex-1">
                <textarea rows={2} placeholder="What is on your mind?" className="w-full resize-none border-0 p-0 text-base text-slate-900 outline-none placeholder:text-slate-400" />
                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="text-xs font-medium text-slate-400">Everyone can reply</span>
                  <button className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-bold text-white hover:bg-sky-600">Post</button>
                </div>
              </div>
            </div>
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
