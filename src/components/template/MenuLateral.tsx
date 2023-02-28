import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from '../icons'
import Logo from './Logo'
import MenuItem from './MenuItem'

const MenuLateral = () => {
  return (
    <aside className="flex flex-col dark:bg-gray-900 bg-gray-200 text-gray-700">
      <div
        className="h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800 
        flex flex-col items-center justify-center"
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
      <ul>
        <MenuItem
          onClick={() => console.log('LOGOUT')}
          texto="Sair"
          icone={IconeSair}
          className="text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white"
        />
      </ul>
    </aside>
  )
}

export default MenuLateral
