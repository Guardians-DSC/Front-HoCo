import styled from 'styled-components'
import { Avatar } from 'antd'

export const Wrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    display: ${({ isretracted }) => (isretracted ? 'none' : '')};
  }
`

export const Image = styled.img`
  /* width: ${({ width }) => `${width}px`}; */
  min-width: 60px;
  min-height: 60px;
  border-radius: 100%;
  background-color: black;
  box-shadow: 1px 1px 1px grey;
`

export const AvatarContainer = styled(Avatar)`
  background-color: white;
  padding: 1rem;
  box-shadow: 1px 1px 1px grey;
  border-radius: 100%;
`

export const UserContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
`

export const Name = styled.span`
  font-weight: bold;
`
