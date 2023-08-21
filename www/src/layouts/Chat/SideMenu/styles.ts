import styled from 'styled-components'

interface SideMenuProps {
  open: boolean
}

export const SideMenuLayout = styled.div<SideMenuProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  z-index: 1;
  height: 100%;
  min-width: 300px;
  border-right: 1px solid #0ef002;
  background-color: #000000;

  @media (max-width: 768px) {
    position: absolute;
    min-width: 0px;
    border-right: ${({ open }) => open ? '1px solid #0ef002' : 'none'};
    ${({ open }) => open ? 'width: 300px;' : 'width: 0px;'}}

    .menu-item {
      ${({ open }) => open ? 'display: block;' : 'display: none;'}
    }
  }
`

export const MenuArrow = styled.div`
  position: absolute;
  display: flex
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  right: -30px;
  font-size: 30px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`
