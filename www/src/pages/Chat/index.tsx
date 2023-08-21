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

  const userName = location?.state?.username ?? window.localStorage.getItem('rustchat-username')

  useEffect(() => {
    const storedUsername = window.localStorage.getItem('rustchat-username')

    if (!location?.state?.username && !storedUsername) {
      navigate('/')
    }
  }, [location.state])

  return (
    <>
      <Navbar />
      <ChatLayout>
        <ChatProvider>
          <SideMenu />
          <ChatContainer>
            <ChatDashboard username={userName ?? ''} />
            <ChatManager username={userName ?? ''} />
          </ChatContainer>
        </ChatProvider>
      </ChatLayout>
    </>
  );
}
