import React, { MouseEventHandler, useContext, useEffect } from 'react';
import { SideMenuLayout } from './styles';
import { MenuItem } from '../../../components/MenuItem';
import { ChatContext } from '../../../context/ChatContext';

export const SideMenu: React.FC = () => {
  const { joinRoom, cleanMessages } = useContext(ChatContext)
  const [selected, setSelected] = React.useState<number>()

  const rooms = [
    {
      name: 'Principal',
      id: 'room-1'
    },
    {
      name: 'Sala 2',
      id: 'room-2'
    },
    {
      name: 'Sala 3',
      id: 'room-3'
    },
    {
      name: 'Sala 4',
      id: 'room-4'
    },
    {
      name: 'Sala 5',
      id: 'room-5'
    },
    {
      name: 'Sala 6',
      id: 'room-6'
    },
    {
      name: 'Sala 7',
      id: 'room-7'
    },
    {
      name: 'Sala 8',
      id: 'room-8'
    }
  ]

  const onClickMenuItem = (index: number) => {
    setSelected(index)
    cleanMessages()
  }

  useEffect(() => {
    if (selected !== undefined) {
      joinRoom(rooms[selected].id)
    }
  }, [selected])

  const getRooms = () => {
    return rooms.map((room, index) => {
      return (
        <MenuItem
          selected={index === selected}
          onClick={() => onClickMenuItem(index)}
          key={room.id}
          text={room.name}
        />
      )
    })
  }

  return (
    <SideMenuLayout>
      {getRooms()}
    </SideMenuLayout>
  );
}
