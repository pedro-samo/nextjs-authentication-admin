import { MoonIcon, SunIcon } from '../icons'

interface ThemeButtonProps {
  theme: string | undefined
  changeTheme: (() => void) | undefined
}

const ThemeButton = (props: ThemeButtonProps) => {
  return props.theme === 'dark' ? (
    <div
      onClick={props.changeTheme}
      className="hidden bg-gradient-to-r from-yellow-300 to-yellow-600 
        lg:w-24 w-15 h-8 sm:flex items-center cursor-pointer p-1 rounded-full"
    >
      <div
        className="flex items-center justify-center bg-white text-yellow-600 
        w-6 h-6 rounded-full"
      >
        {SunIcon(5)}
      </div>
      <div className="hidden lg:flex items-center ml-3 text-white">
        <span className="text-sm">Light</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.changeTheme}
      className="hidden bg-gradient-to-r from-gray-500 to-gray-900 
        lg:w-24 w-15 h-8 sm:flex items-center justify-end cursor-pointer p-1 rounded-full"
    >
      <div className="hidden lg:flex items-center mr-4 text-gray-300">
        <span className="text-sm">Dark</span>
      </div>
      <div
        className="flex items-center justify-center bg-black text-yellow-300 
        w-6 h-6 rounded-full"
      >
        {MoonIcon(6)}
      </div>
    </div>
  )
}

export default ThemeButton
