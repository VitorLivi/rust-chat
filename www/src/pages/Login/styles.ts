import styled from 'styled-components'

export const LoginLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`

export const LoginContainer = styled.div`
  z-index: 1;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`

export const LoginButton = styled.button`
  background-color: black;
  color: white;
  border: 1px solid #0ef002;
  transition: 0.2s;

  &:hover {
    background-color: #0ef002;
    border: 1px solid #0ef002;
    color: black;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 20px;
`
