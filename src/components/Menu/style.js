import styled from 'styled-components'

import { Link } from 'react-router-dom'


export const OutWrapper = styled.div`
  height: 100vh;
  box-sizing: border-box;
  width: ${({ isRetracted }) => isRetracted ? '5rem' : '18rem'};
  transition: width 0.5s;

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
  padding: ${({ isRetracted }) => isRetracted ? '2rem 0rem' : '2rem'};
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
`

export const MenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

`

export const ArrowContainer = styled.div`
  cursor: pointer;
  align-self: ${({ isRetracted }) => isRetracted ? '' : 'flex-end'};
  transform: ${({ isRetracted }) => isRetracted ? 'rotate(180deg)' : ''};
  transition: transform 0.5s ease;
`

export const LinkContainer = styled(Link)`
  display: ${({ isRetracted }) => isRetracted ? 'none' : ''};
`

export const MenuBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MenuFooter = styled(Link)``
