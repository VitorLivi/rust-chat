import React from 'react';
import { SideMenu } from '../../layouts/Chat/SideMenu';
import { ChatContainer, ChatLayout } from './styles';
import { ChatDashboard } from '../../layouts/Chat/Dashboard';
import { ChatManager } from '../../layouts/Chat/Manager';

export const Chat: React.FC = () => {
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
