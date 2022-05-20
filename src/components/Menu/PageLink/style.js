import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  background-color: ${(props) =>
    props.isactive ? props.theme['main-white'] : props.theme['main-green']};
  align-items: center;
  gap: 0.5rem;
  min-width: ${({ isretracted }) => (isretracted ? 'fit-content' : '15rem')};
  width: ${({ isretracted }) => (isretracted ? 'fit-content' : '100%')};
  font-family: 'sen';
  border-radius: 8px;
  transition: 0.3s;
  min-height: 3rem;

  &:hover {
    background-color: ${({ theme, isActive }) =>
      isActive ? theme['main-white'] : theme['second-green']};
  }
`

export const Icon = styled.div`
  filter: ${(props) => (props.isactive ? '' : 'brightness(500%)')};
  fill: ${({ theme }) => theme['main-green']};
`

export const Text = styled.span`
  color: ${(props) =>
    props.isactive ? props.theme['main-green'] : props.theme['main-white']};
  font-weight: bold;
  display: ${({ isretracted }) => (isretracted ? 'none' : '')};
`
