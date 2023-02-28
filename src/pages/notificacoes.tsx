import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

export default function Notificacoes() {
  const { theme, changeTheme } = useAppData()

  return (
    <Layout
      titulo="Notificações"
      subtitulo="Aqui você irá gerenciar suas notificações"
    ></Layout>
  )
}
