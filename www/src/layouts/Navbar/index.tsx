import React from 'react'
import { NavbarLayout } from './styles'
import { useNavigate } from 'react-router'

export const Navbar: React.FC = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('rustchat-username')
    navigate('/')
  }

  return (
    <NavbarLayout>
      <h1>RustChat</h1>
      <h3 onClick={handleLogout}>Sair</h3>
    </NavbarLayout>
  )
}
