import React, { useContext } from 'react';
import { MenuArrow, SideMenuLayout } from './styles';
import { MenuItem } from '../../../components/MenuItem';
import { ChatContext } from '../../../context/ChatContext';

export const SideMenu: React.FC = () => {
  const { joinRoom, cleanMessages } = useContext(ChatContext)
  const [selected, setSelected] = React.useState<number>()
  const [open, setOpen] = React.useState<boolean>(true)

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
    joinRoom(rooms[index].id)
    cleanMessages()
  }

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

  const onClickArrow = () => {
    setOpen(!open)
  }

  const getArrow = () => {
    if (open) {
      return (
        <MenuArrow onClick={onClickArrow}>{'<'} </MenuArrow>
      )
    }

    return (
      <MenuArrow onClick={onClickArrow}>{'>'}</MenuArrow>
    )
  }

  return (
    <SideMenuLayout open={open}>
      {getArrow()}
      {getRooms()}
    </SideMenuLayout>
  );
}
