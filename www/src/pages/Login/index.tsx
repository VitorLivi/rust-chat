import React from 'react'
import { LoginButton, LoginContainer, LoginForm, LoginLayout } from './styles'
import { Matrix } from '../../layouts/Matrix'
import { useNavigate } from 'react-router'
import { v4 as uuid } from 'uuid'

export const Login = () => {
  const [username, setUsername] = React.useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    const newUuid = uuid()

    navigate('/chat', { state: { username, uuid: newUuid } })
    window.localStorage.setItem('rustchat-username', username)
    window.localStorage.setItem('rustchat-uuid', newUuid)
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
