import Avatar from './Avatar'

export type Post = {
  name: string
  handle: string
  time: string
  initials: string
  body: string
  replies: number
  reposts: number
  likes: number
}

type PostCardProps = {
  post: Post
}

function PostCard({ post }: PostCardProps) {
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

export default PostCard
