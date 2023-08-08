import React, { useEffect } from 'react'
import { SideMenu } from '../../layouts/Chat/SideMenu'
import { ChatContainer, ChatLayout } from './styles'
import { ChatDashboard } from '../../layouts/Chat/Dashboard'
import { ChatManager } from '../../layouts/Chat/Manager'
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket'
import { useLocation, useNavigate } from 'react-router'

export const Chat: React.FC = () => {
  const WS_URL = 'ws://127.0.0.1:8080/ws'
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.state.username) {
      navigate('/')
    }
  }, [location.state.username])

  const { sendMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    }
  });

  useEffect(() => {
    sendMessage('join: room1');
  }, [sendMessage]);

  return (
    <ChatLayout>
      <SideMenu />
      <ChatContainer>
        <ChatDashboard />
        <ChatManager />
      </ChatContainer>
    </ChatLayout>
  );
}
