import { MouseEventHandler } from "react";
import { MenuItemLayout, MenuItemSelected, MenuItemText } from "./styles"

interface MenuiItemProps {
  text?: string;
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const MenuItem: React.FC<MenuiItemProps> = ({ text, selected, onClick }) => {
  const getSelectedArrow = () => {
    if (selected) {
      return (
        <MenuItemSelected>⯈</MenuItemSelected>
      )
    }

    return null
  }

  return (
    <MenuItemLayout onClick={onClick}>
      {getSelectedArrow()}
      <MenuItemText>{text ?? 'Item'}</MenuItemText>
    </MenuItemLayout>
  )
}
