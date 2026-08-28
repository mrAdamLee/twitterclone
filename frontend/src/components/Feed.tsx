import PostCard, { type Post } from './PostCard'
import PostComposer from './PostComposer'

type FeedProps = {
  posts: Post[]
}

function Feed({ posts }: FeedProps) {
  return (
    <section className="min-h-screen border-x border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-5 py-6 sm:px-7">
        <h1 className="text-xl font-black tracking-tight">Your feed</h1>
        <p className="mt-1 text-sm text-slate-500">A calm place for useful thoughts.</p>
        <PostComposer />
      </div>
      {posts.map((post) => <PostCard key={post.handle} post={post} />)}
    </section>
  )
}

export default Feed
