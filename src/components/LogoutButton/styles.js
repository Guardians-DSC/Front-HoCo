import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ theme }) => theme['third-green']};
  padding: 0.6rem 1rem;
  height: min-content;
  cursor: pointer;
  border-radius: 2px;
  font-size: 1rem;
  color: ${({ theme }) => theme['main-white']};
  width: fit-content;
  border: 0;
  box-shadow: none;
`
