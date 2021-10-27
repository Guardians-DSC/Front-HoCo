import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  background-color: ${(props) =>
    props.isActive ? props.theme['main-white'] : props.theme['main-green']};
  align-items: center;
  gap: 0.5rem;
  min-width: ${({ isRetracted }) => (isRetracted ? 'fit-content' : '15rem')};
  width: ${({ isRetracted }) => (isRetracted ? 'fit-content' : '100%')};
  font-family: 'sen';
  border-radius: 2px;
  transition: 0.3s;
  min-height: 3rem;
`

export const Icon = styled.div`
  filter: ${(props) => (props.isActive ? '' : 'brightness(500%)')};
  fill: ${({ theme }) => theme['main-green']};
`

export const Text = styled.span`
  color: ${(props) =>
    props.isActive ? props.theme['main-green'] : props.theme['main-white']};
  font-weight: bold;
  display: ${({ isRetracted }) => (isRetracted ? 'none' : '')};
`
