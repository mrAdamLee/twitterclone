import Avatar from './Avatar'

type NavbarProps = {
  brand?: string
  userName?: string
  userInitials?: string
}

function Navbar({ brand = 'threadline', userName = 'Alex', userInitials = 'AJ' }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-xl bg-sky-500 text-lg font-black text-white">
            {brand.charAt(0)}
          </div>
          <span className="text-lg font-black tracking-tight">{brand}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-slate-500 sm:inline">Good morning, {userName}</span>
          <Avatar initials={userInitials} small />
        </div>
      </div>
    </header>
  )
}

export default Navbar
