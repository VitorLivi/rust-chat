import styled from 'styled-components';

export const NavbarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-bottom: 1px solid #0ef002;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 80px;

  h3 {
    cursor: pointer;
  }

  h3:hover {
    text-decoration: underline;
  }
`;
