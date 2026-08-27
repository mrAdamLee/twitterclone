import Avatar from './Avatar'

function PostComposer() {
  return (
    <div className="mt-5 flex gap-3">
      <Avatar initials="AJ" />
      <div className="flex-1">
        <textarea
          rows={2}
          placeholder="What is on your mind?"
          className="w-full resize-none border-0 p-0 text-base text-slate-900 outline-none placeholder:text-slate-400"
        />
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
          <span className="text-xs font-medium text-slate-400">
            Everyone can reply
          </span>
          <button className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-bold text-white hover:bg-sky-600">
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostComposer
