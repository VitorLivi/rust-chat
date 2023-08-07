import { createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login';
import { Chat } from './pages/Chat';

export const routes = [
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]
