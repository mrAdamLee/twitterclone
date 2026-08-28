import NavigationItem from './NavigationItem'

const navigationItems = [
  { label: 'Home', icon: '⌂' },
  { label: 'Explore', icon: '#' },
  { label: 'Notifications', icon: '♡' },
  { label: 'Messages', icon: '✉' },
  { label: 'Bookmarks', icon: '▱' },
]

function Sidebar() {
  return (
    <nav className="hidden pt-8 lg:block">
      <div className="sticky top-24 space-y-2">
        {navigationItems.map((item, index) => (
          <NavigationItem key={item.label} {...item} active={index === 0} />
        ))}
        <button className="mt-5 w-full rounded-xl bg-sky-500 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-sky-600">Post</button>
      </div>
    </nav>
  )
}

export default Sidebar