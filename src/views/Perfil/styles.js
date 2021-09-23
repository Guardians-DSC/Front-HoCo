import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1025px) {
    align-items: center;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Icon = styled(UserOutlined)`
  font-size: 2rem;
`

export const ButtonWrapper = styled.div`
  align-self: flex-end;

  @media screen and (max-width: 1025px) {
    margin-top: 3.5rem;
    align-self: center;
  }

  @media screen and (max-width: 600px) {
    margin-top: 2rem;
  }
`
