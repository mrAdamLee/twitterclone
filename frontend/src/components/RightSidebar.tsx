const trends = ['Design systems', 'Spring Boot', 'Build in public']

function RightSidebar() {
  return (
    <aside className="hidden pt-8 xl:block">
      <div className="sticky top-24 space-y-6">
        <label className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-slate-400 shadow-sm ring-1 ring-slate-200">
          <span aria-hidden="true">Search</span>
          <input
            aria-label="Search"
            className="min-w-0 flex-1 bg-transparent outline-none"
            placeholder="Search threadline"
          />
        </label>
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <h2 className="font-black tracking-tight">Trending now</h2>
          <div className="mt-4 space-y-4">
            {trends.map((trend, index) => (
              <div key={trend}>
                <p className="text-xs text-slate-400">{index + 1} · Trending</p>
                <p className="mt-1 text-sm font-bold">{trend}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default RightSidebar
