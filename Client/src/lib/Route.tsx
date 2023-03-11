import {ReactNode} from 'react';
import {useNavigate, Routes, Route as DomRoute} from 'react-router-dom';

interface Params {
  path: string
  element: ReactNode,
  auth: boolean
}

export default function Route(params: Params) {
  const navigate = useNavigate()
  const token = ''

  if (params.auth && !token) {
    navigate(-1)
  }

  return (
    <Routes>
      <DomRoute path={params.path} element={params.element}/>
    </Routes>
  )
}