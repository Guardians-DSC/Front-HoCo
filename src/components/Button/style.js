import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0.6rem 1rem;
  background-color: ${({ theme }) => theme['main-green']};
  color: ${({ theme }) => theme['main-white']};
  width: fit-content;
  cursor: pointer;
  border-radius: 2px;
`
