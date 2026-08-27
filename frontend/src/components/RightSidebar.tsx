import SearchBar from './SearchBar'
import TrendingList from './TrendingList'

const trends = ['Design systems', 'Spring Boot', 'Build in public']

function RightSidebar() {
  return (
    <aside className="hidden pt-8 xl:block">
      <div className="sticky top-24 space-y-6">
        <SearchBar />
        <TrendingList trends={trends} />
      </div>
    </aside>
  )
}

export default RightSidebar
