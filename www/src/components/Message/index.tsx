import React from 'react'
import { MessageLayout } from './styles';

interface MessageProps {
  fromMe: boolean;
  username: string;
  text: string;
}

export const Message: React.FC<MessageProps> = ({ fromMe, text, username }) => {
  return (
    <MessageLayout fromMe={fromMe}>
      <strong>{username}</strong>
      <text>
        {text}
      </text>
    </MessageLayout>
  )
}
