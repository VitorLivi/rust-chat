import styled from 'styled-components'

export const ChatDashboardLayout = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow: auto;

  :first-child {
    margin-top: auto;
  }
`
