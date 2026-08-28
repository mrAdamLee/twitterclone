type PostActionsProps = {
  replies: number
  reposts: number
  likes: number
}

function PostActions({ replies, reposts, likes }: PostActionsProps) {
  return (
    <div className="mt-4 flex max-w-md justify-between text-sm text-slate-500">
      <button type="button" className="hover:text-sky-600">
        Reply <span className="ml-1">{replies}</span>
      </button>
      <button type="button" className="hover:text-emerald-600">
        Repost <span className="ml-1">{reposts}</span>
      </button>
      <button type="button" className="hover:text-rose-600">
        Like <span className="ml-1">{likes}</span>
      </button>
      <button type="button" aria-label="Share post" className="hover:text-sky-600">
        Share
      </button>
    </div>
  )
}

export default PostActions
