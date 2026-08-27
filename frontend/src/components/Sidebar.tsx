function Sidebar() {
  return (
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
  )
}

export default Sidebar