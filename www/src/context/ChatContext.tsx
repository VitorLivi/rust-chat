import { createContext, useEffect, useState } from "react"
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket"

interface PropsChatContext {
  sendMessage: (message: Message) => void
  joinRoom: (room: string) => void
  messages: Message[]
  cleanMessages: () => void
}

interface ChatProviderProps {
  children: React.ReactNode
}

const ChatContext = createContext<PropsChatContext>({} as any)

export interface Message {
  username: string,
  message: string
}

const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const WS_URL = 'wss://rustchat-api.vitorlivi.online/ws'

  const joinRoom = (room: string) => {
    sendMessage(`/join ${room}`)
  }

  const createRoom = (room: string) => {
    sendMessage(`/name ${room}`)
  }

  const sendMessageProxy = (newMessage: Message) => {
    setMessages([...messages, newMessage])
    sendJsonMessage({
      ...newMessage,
    })
  }

  const cleanMessages = () => {
    setMessages([])
  }

  const { sendMessage, sendJsonMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    onMessage: (message) => {
      try {
        const data = JSON.parse(message.data)

        if (data.message && data.username) {
          setMessages([...messages, {
            username: data.username,
            message: data.message
          }])
        } else {
          console.log(message)
        }
      } catch (error) {
        console.log(message)
      }
    }
  });

  return (
    <ChatContext.Provider
      value={{
        sendMessage: sendMessageProxy,
        messages,
        joinRoom,
        cleanMessages
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export { ChatContext, ChatProvider }



