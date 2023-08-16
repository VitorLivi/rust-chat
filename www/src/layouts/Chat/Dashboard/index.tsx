import React, { useContext } from 'react'
import { ChatDashboardLayout } from './styles'
import { Message } from '../../../components/Message'
import { ChatContext } from '../../../context/ChatContext'

interface ChatDashboardProps {
  username: string
}

export const ChatDashboard: React.FC<ChatDashboardProps> = ({ username }) => {
  const { messages } = useContext(ChatContext)

  const getMessages = () => {
    return messages.map((message, index) => {
      return (
        <Message
          key={index}
          fromMe={message.username === username}
          text={message.message}
          username={message.username}
        />
      )
    })
  }

  return (
    <ChatDashboardLayout>
      {getMessages()}
    </ChatDashboardLayout>
  )
}
