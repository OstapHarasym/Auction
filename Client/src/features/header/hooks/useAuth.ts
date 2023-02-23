export default function useAuth() {
  const token = localStorage.getItem('token')
  const isAuthorized = token !== null
  return [isAuthorized, token]
}