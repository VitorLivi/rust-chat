import React from 'react';
import { ChatManagerLayout, ChatManagerTextArea } from './styles';

export const ChatManager: React.FC = () => {
  return (
    <ChatManagerLayout>
      <ChatManagerTextArea placeholder="Envie uma mensagem..." />
      <button>Enviar</button>
    </ChatManagerLayout>
  );
}
