import React, { useContext, useEffect } from 'react'
import { ChatDashboardLayout } from './styles'
import { Message } from '../../../components/Message'
import { ChatContext } from '../../../context/ChatContext'

interface ChatDashboardProps {
  username: string
}

export const ChatDashboard: React.FC<ChatDashboardProps> = ({ username }) => {
  const { messages } = useContext(ChatContext)
  const chatDashboardRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatDashboardRef.current) {
      chatDashboardRef.current.scrollTop = chatDashboardRef.current.scrollHeight
    }
  }, [messages.length])

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
    <ChatDashboardLayout ref={chatDashboardRef}>
      {getMessages()}
    </ChatDashboardLayout>
  )
}
