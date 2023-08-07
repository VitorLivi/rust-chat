import { MenuItemLayout, MenuItemSelected, MenuItemText } from "./styles"

interface MenuiItemProps {
  text?: string;
  selected?: boolean;
}

export const MenuItem: React.FC<MenuiItemProps> = ({ text, selected }) => {

  const getSelectedArrow = () => {
    if (true) {
      return (
        <MenuItemSelected>⯈</MenuItemSelected>
      )
    }

    return null
  }

  return (
    <MenuItemLayout>
      {getSelectedArrow()}
      <MenuItemText>{text ?? 'Item'}</MenuItemText>
    </MenuItemLayout>
  )
}
