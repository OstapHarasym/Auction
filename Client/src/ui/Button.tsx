interface Params {
  title: string,
  colour: 'blue' | 'red'
  onClick: () => void,
  className?: string
}

export function Button(params: Params) {
  return (
    <button onClick={() => params.onClick()} className={`inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-${params.colour}-700 rounded-lg hover:bg-${params.colour}-800`}>
      {params.title}
    </button>
  )
}