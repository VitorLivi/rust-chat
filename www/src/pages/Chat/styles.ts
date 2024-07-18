import styled from 'styled-components'

export const ChatLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: calc(100% - 80px);
  gap: 20px;
`

export const ChatContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: calc(100% - 340px);
  padding: 20px;
  gap: 50px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
