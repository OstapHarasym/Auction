interface Props {
  label: string
  type: "number" | "text"
  placeholder: string
  onChange: (newValue : string) => void
}

export function TextInput(props: Props) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">{props.label}</label>
      <input onChange={(event) => props.onChange(event.target.value)}
             type={props.type}
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
             placeholder={props.placeholder}
             required={true}/>
    </div>
  )
}