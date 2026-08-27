import TrendingList from './TrendingList'

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
        <TrendingList trends={trends} />
      </div>
    </aside>
  )
}

export default RightSidebar
