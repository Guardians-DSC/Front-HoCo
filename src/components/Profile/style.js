import styled from "styled-components"
import { Avatar } from "antd"

export const Wrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Image = styled.img`
  max-width: 3.5rem;
  border-radius: 100%;
`

export const AvatarContainer = styled(Avatar)`
  background-color: white;
  padding: 1rem;
  border-radius: 100%;
`