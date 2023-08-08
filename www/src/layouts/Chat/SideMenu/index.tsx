import React, { MouseEventHandler } from 'react';
import { SideMenuLayout } from './styles';
import { MenuItem } from '../../../components/MenuItem';

export const SideMenu: React.FC = () => {
  const [selected, setSelected] = React.useState<number>()

  const rooms = [
    'Sala 1',
    'Sala 2',
    'Sala 3',
    'Sala 4',
  ]

  const onClickMenuItem = (index: number) => {
    setSelected(index)
  }

  const getRooms = () => {
    return rooms.map((room, index) => {
      return (
        <MenuItem
          selected={index === selected}
          onClick={() => onClickMenuItem(index)}
          key={room}
          text={room}
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
