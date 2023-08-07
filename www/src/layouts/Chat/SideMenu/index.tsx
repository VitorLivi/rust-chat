import React from 'react';
import { SideMenuLayout } from './styles';
import { MenuItem } from '../../../components/MenuItem';

export const SideMenu: React.FC = () => {
  return (
    <SideMenuLayout>
      <MenuItem text="Sala 1" />
      <MenuItem text="Sala 2" />
    </SideMenuLayout>
  );
}
