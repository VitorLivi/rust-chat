import React from 'react'
import { ChatDashboardLayout } from './styles'
import { Message } from '../../../components/Message'

export const ChatDashboard: React.FC = () => {

  const messages = [
    {
      fromMe: false,
      text: 'Hello, i am fine, and you?',
      username: 'Me'
    },
    {
      fromMe: true,
      text: 'Hello, how are you?',
      username: 'Jhon Doe'
    },
  ]

  const getMessages = () => {
    return messages.map((message) => {
      return (
        <Message
          fromMe={message.fromMe}
          text={message.text}
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
