import styled from 'styled-components'

import { Input as InputAntd } from 'antd'

export const Title = styled.h1`
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 1.25rem;
`
export const Input = styled(InputAntd)`
  width: 100%;
  border-radius: 3px;
  height: 2.5rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme['main-font']};
  background-color: ${({ theme }) => theme['main-background']};

  &:focus {
    border-color: #18ff3933;
    box-shadow: 0 0 0 2px rgb(24 255 57 / 20%);
  }
`

export const LoginButton = styled.span`
  color: ${({ theme }) => theme['main-font']};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
