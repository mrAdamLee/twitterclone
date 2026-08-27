type TrendingListProps = {
  trends: string[]
}

function TrendingList({ trends }: TrendingListProps) {
  return (
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
  )
}

export default TrendingList
