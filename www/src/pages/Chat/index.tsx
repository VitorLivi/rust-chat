import React, { useEffect } from 'react'
import { SideMenu } from '../../layouts/Chat/SideMenu'
import { ChatContainer, ChatLayout } from './styles'
import { ChatDashboard } from '../../layouts/Chat/Dashboard'
import { ChatManager } from '../../layouts/Chat/Manager'
import { useLocation, useNavigate } from 'react-router'
import { ChatProvider } from '../../context/ChatContext'
import { Navbar } from '../../layouts/Navbar'

export const Chat: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.state.username) {
      navigate('/')
    }
  }, [location.state.username])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
      }}>
      <Navbar />
      <ChatLayout>
        <ChatProvider>
          <SideMenu />
          <ChatContainer>
            <ChatDashboard username={location.state.username} />
            <ChatManager username={location.state.username} />
          </ChatContainer>
        </ChatProvider>
      </ChatLayout>
    </div>
  );
}
