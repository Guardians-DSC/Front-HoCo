import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from './styles'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button onClick={() => loginWithRedirect({ prompt: 'login' })}>Entrar</Button>
  )
}
