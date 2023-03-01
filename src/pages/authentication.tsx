import { useState } from 'react'

import AuthInput from '../components/auth/AuthInput'
import { WarningIcon } from '../components/icons'
import useAuth from '../data/hook/useAuth'

const authentication = () => {
  const { user, loginGoogle } = useAuth()

  const [error, setError] = useState('')
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = () => {
    if (mode === 'login') {
      console.log('login')
      showError('A error on login happened!')
    } else {
      console.log('signup')
      showError('A error on signup happened!')
    }
  }

  const showError = (msg: string, timeInSeconds = 5) => {
    setError(msg)
    setTimeout(() => {
      setError('')
    }, timeInSeconds * 1000)
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          className="h-screen w-full object-cover"
          src="https://source.unsplash.com/random"
          alt="Image of Authentication Screen"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:1/3">
        <h1 className="text-3xl font-bold mb-5">
          {mode === 'login' ? 'Enter with your account' : 'Signup on plataform'}
        </h1>
        {error && (
          <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
            <>
              {WarningIcon()}
              <span className="ml-3">{error}</span>
            </>
          </div>
        )}
        <AuthInput
          label="Email"
          type="email"
          value={email}
          valueChanged={setEmail}
          required
        />
        <AuthInput
          label="Password"
          type="password"
          value={password}
          valueChanged={setPassword}
          required
        />
        <button
          className="w-full bg-indigo-500 hover:bg-indigo-400 text-white 
        rounded-lg px-5 py-3 mt-6"
          onClick={submit}
        >
          {mode === 'login' ? 'Enter' : 'Signup'}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          className="w-full bg-red-500 hover:bg-red-400 text-white 
        rounded-lg px-5 py-3"
          onClick={loginGoogle}
        >
          Enter with Google
        </button>

        {mode === 'login' ? (
          <p className="mt-8">
            New here?
            <a
              className="text-blue-500 hover:text-blue:700 font-semibold cursor-pointer"
              onClick={() => setMode('signup')}
            >
              {' '}
              Create a free account
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Are Already member of our community?
            <a
              className="text-blue-500 hover:text-blue:700 font-semibold cursor-pointer"
              onClick={() => setMode('login')}
            >
              {' '}
              Enter with your credentials
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

export default authentication
