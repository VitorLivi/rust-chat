import styled from 'styled-components'

interface MessageLayoutProps {
  fromMe?: boolean
}

export const MessageLayout = styled.div<MessageLayoutProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  align-self: ${props => props.fromMe ? 'flex-end' : 'flex-start'};
  width: max-content;
  padding: 20px;
  border: solid 1px #0ef002;

  strong {
    font-size: 18px;
    font-weight: bolder;
  }
`
