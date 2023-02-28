interface AuthInputProps {
  label: string
  value: any
  type?: 'text' | 'email' | 'password'
  required?: boolean
  notRenderWhen?: boolean
  valueChanged: (newValue: any) => void
}

const AuthInput = (props: AuthInputProps) => {
  return props.notRenderWhen ? null : (
    <div className="flex flex-col mt-4">
      <label>{props.label}</label>
      <input
        className="px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
        focus:border-blue-500 focus:outline-none focus:bg-white"
        type={props.type ?? 'text'}
        value={props.value}
        onChange={(e) => props.valueChanged?.(e.target.value)}
        required={props.required}
      />
    </div>
  )
}

export default AuthInput
