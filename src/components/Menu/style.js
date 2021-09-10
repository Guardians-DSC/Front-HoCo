import styled from 'styled-components'

import { Arrow } from '../../assets/icons/Arrow'

export const OutWrapper = styled.div`
  height: 100vh;
  box-sizing: border-box;
  max-width: 18rem;
  width: 20vw;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: ${props => props.theme['main-green']};
  height: inherit;
  max-width: inherit;
  width: inherit;
  padding: 2rem 2rem;
  justify-content: space-between;
  box-sizing: border-box;
`

export const MenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`

export const ArrowContainer = styled(Arrow)`
  cursor: pointer;
  align-self: flex-end;
`

export const MenuBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MenuFooter = styled.div``
