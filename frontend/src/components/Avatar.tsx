type AvatarProps = {
  initials: string
  small?: boolean
}

function Avatar({ initials, small = false }: AvatarProps) {
  return (
    <div
      className={`grid shrink-0 place-items-center rounded-full bg-sky-100 font-bold text-sky-700 ${small ? 'size-9 text-xs' : 'size-11 text-sm'}`}
    >
      {initials}
    </div>
  )
}

export default Avatar
