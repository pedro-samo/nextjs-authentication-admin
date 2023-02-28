import Link from 'next/link'

interface MenuItemProps {
  texto: string
  icone: any
  url?: string
  className?: string
  onClick?: (evento: any) => void
}

const MenuItem = (props: MenuItemProps) => {
  const renderLinkBody = () => {
    return (
      <div
        className={`flex flex-col justify-center items-center w-20 h-20 text-gray-600  dark:text-gray-200 ${props.className}`}
      >
        <span>{props.icone}</span>
        <span className="text-xs font-light">{props.texto}</span>
      </div>
    )
  }

  return (
    <li
      className="hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800"
      onClick={props.onClick}
    >
      {props.url ? (
        <Link href={props.url}>{renderLinkBody()}</Link>
      ) : (
        renderLinkBody()
      )}
    </li>
  )
}

export default MenuItem
