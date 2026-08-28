type NavigationItemProps = {
  label: string
  icon: string
  active?: boolean
}

function NavigationItem({ label, icon, active = false }: NavigationItemProps) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold ${active ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-white hover:text-slate-950'}`}
    >
      <span className="w-5 text-center text-base">{icon}</span>
      {label}
    </button>
  )
}

export default NavigationItem
