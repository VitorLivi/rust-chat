import React, { KeyboardEventHandler, useContext } from 'react';
import { ChatManagerLayout, ChatManagerTextArea } from './styles';
import { ChatContext } from '../../../context/ChatContext';

interface ChatManagerProps {
  username: string
}

export const ChatManager: React.FC<ChatManagerProps> = ({ username }) => {
  const [message, setMessage] = React.useState<string>('')
  const { sendMessage } = useContext(ChatContext)

  const onClickSend = () => {
    const isMessageValid = validateMessage()

    if (!isMessageValid) {
      return
    }

    const jsonMessage = {
      message,
      username,
    }

    sendMessage(jsonMessage)
    setMessage('')
  }

  const validateMessage = () => {
    return message.length > 0
  }

  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter') {
      onClickSend()
      e.stopPropagation()
      e.preventDefault()
    }
  }

  return (
    <ChatManagerLayout>
      <ChatManagerTextArea
        maxLength={200}
        value={message}
        onKeyDown={onKeyDown}
        placeholder="Envie uma mensagem..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={onClickSend}>Enviar</button>
    </ChatManagerLayout>
  );
}
