import useAppData from '@/src/data/hook/useAppData'
import ThemeButton from './ThemeButton'
import Titulo from './Titulo'
import UserAvatar from './UserAvatar'

interface CabecalhoProps {
  titulo: string
  subtitulo: string
}

const Cabecalho = (props: CabecalhoProps) => {
  const { theme, changeTheme } = useAppData()

  return (
    <div className="flex ">
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className="flex flex-grow justify-end items-center">
        <ThemeButton theme={theme} changeTheme={changeTheme} />
        <UserAvatar className="ml-3" />
      </div>
    </div>
  )
}

export default Cabecalho
