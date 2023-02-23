interface Params {
  title: string,
  colour: string,
  onClick: () => void
}

export function Button(params: Params) {
  return (
    <button>
      {params.title}
    </button>
  )
}