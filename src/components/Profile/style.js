import styled from 'styled-components'
import { Avatar } from 'antd'

export const Wrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    display: ${({ isRetracted }) => (isRetracted ? 'none' : '')};
  }
`

export const Image = styled.img`
  max-width: 3.5rem;
  border-radius: 100%;
  box-shadow: 1px 1px 1px grey;
`

export const AvatarContainer = styled(Avatar)`
  background-color: white;
  padding: 1rem;
  box-shadow: 1px 1px 1px grey;
  border-radius: 100%;
`
