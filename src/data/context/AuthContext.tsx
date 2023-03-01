import { createContext, useState } from 'react'
import { useRouter } from 'next/router'
import User from '@/src/model/User'
import firebase from '../../firebase/config'

interface AuthContextProps {
  user?: User
  loginGoogle?: () => Promise<void>
}

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

const AuthContext = createContext<AuthContextProps>({})

export const AuthProvider = (props: any) => {
  const router = useRouter()

  const [user, setUser] = useState<User>()

  const loginGoogle = async () => {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    if (response.user?.email) {
      const user = await normalizedUser(response.user)
      setUser(user)
      router.push('/')
    }
  }

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
