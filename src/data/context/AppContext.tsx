import { createContext, useState } from 'react'

interface AppContextProps {
  theme?: 'dark' | ''
  changeTheme?: () => void
}

const AppContext = createContext<AppContextProps>({
  theme: '',
  changeTheme: () => {},
})

export function AppProvider(props: any) {
  const [theme, setTheme] = useState<'dark' | ''>('')

  const changeTheme = () => {
    setTheme(theme === '' ? 'dark' : '')
  }

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
