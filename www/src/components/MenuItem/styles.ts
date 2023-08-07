import styled from 'styled-components'

export const MenuItemLayout = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #0ef002;
  transition: 0.2s;

  &:hover {
    background-color: #0ef002;
    color: black;
  }
`

export const MenuItemSelected = styled.span`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`

export const MenuItemText = styled.span`
  margin-left: 20px;
`
