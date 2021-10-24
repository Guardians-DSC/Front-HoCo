import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 1.25rem;
`

export const OpenModalButton = styled.span`
  color: ${({ theme }) => theme['main-font']};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
