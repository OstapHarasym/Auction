interface Params {
  label: string
  onChange: (newDate: string) => void
}

export function TextArea(params : Params) {
  return (
    <div className="sm:col-span-2">
      <label className="block mb-2 text-sm font-medium text-gray-900">{params.label}</label>
      <textarea onChange={(event) => params.onChange(event.target.value)} placeholder="Your description here" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"/>
    </div>
  )
}