import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import User from '@/src/model/User'
import firebase from '../../firebase/config'

interface AuthContextProps {
  user?: User
  loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

const normalizedUser = async (firebaseUser: firebase.User): Promise<User> => {
  const token = await firebaseUser.getIdToken()
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName ?? '',
    email: firebaseUser.email ?? '',
    token,
    provider: firebaseUser.providerData[0]?.providerId ?? '',
    imageUrl: firebaseUser.photoURL ?? '',
  }
}

const manageCookie = (logged: string) => {
  if (logged) {
    Cookies.set('admin-template-auth', logged, {
      expires: 7,
    })
  } else {
    Cookies.remove('admin-template-auth')
  }
}

export const AuthProvider = (props: any) => {
  const router = useRouter()

  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState(true)

  const configureSection = async (firebaseUser: any) => {
    if (firebaseUser?.email) {
      const user = await normalizedUser(firebaseUser)
      setUser(user)
      manageCookie('true')
      setLoading(false)
      return user.email
    } else {
      setUser(undefined)
      manageCookie('')
      setLoading(false)
      return false
    }
  }

  const loginGoogle = async () => {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())

    if (response.user) {
      configureSection(response.user)
      router.push('/')
    }
  }

  useEffect(() => {
    const cancel = firebase.auth().onIdTokenChanged(configureSection)
    return () => cancel()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
