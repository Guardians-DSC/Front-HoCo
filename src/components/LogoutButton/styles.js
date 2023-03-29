import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  height: min-content;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme['main-white']};
  width: fit-content;
  margin: 0;
  padding: 0;
  border: 0;
  box-shadow: none;
  transition: 0.3s;
  &:hover {
    opacity: 0.6;
  }
`
