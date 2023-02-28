import useAppData from '@/src/data/hook/useAppData'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import MenuLateral from './MenuLateral'

interface LayoutProps {
  titulo: string
  subtitulo: string
  children?: any
}

const Layout = (props: LayoutProps) => {
  const { theme, changeTheme } = useAppData()

  return (
    <div className={`${theme} flex h-screen w-screen`}>
      <MenuLateral />
      <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800">
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  )
}

export default Layout
