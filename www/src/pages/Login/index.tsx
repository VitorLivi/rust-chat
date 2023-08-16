import React from 'react'
import { LoginButton, LoginContainer, LoginForm, LoginLayout } from './styles'
import { Matrix } from '../../layouts/Matrix'
import { useNavigate } from 'react-router'

export const Login = () => {
  const [username, setUsername] = React.useState('')

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/chat', { state: { username } })
  }

  return (
    <>
      <Matrix />
      <LoginLayout>
        <LoginContainer>
          <h1>Escolher apelido</h1>
          <LoginForm>
            <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="Digite seu apelido" />
            <LoginButton onClick={handleLogin}>Entrar</LoginButton>
          </LoginForm >
        </LoginContainer>
      </LoginLayout>
    </>
  )
}
