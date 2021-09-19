import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const OutWrapper = styled.div`
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  margin-right: ${({ isRetracted }) => (isRetracted ? '5rem' : '18rem')};
  transition: 0.5s ease;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    transform: ${({ isActive }) => (isActive ? '' : 'translate(-50vh)')};
    position: absolute;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: ${(props) => props.theme['main-green']};
  height: inherit;
  width: ${({ isRetracted }) => (isRetracted ? '5rem' : '18rem')};
  padding: ${({ isRetracted }) => (isRetracted ? '2rem 0rem' : '1.5rem 2rem')};
  justify-content: space-between;
  box-sizing: border-box;
  transition: width 0.5s;
  overflow: hidden;

  @media screen and (max-width: 1025px) {
    position: block;
    padding: 2rem 1rem;
    width: 16rem;
  }
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
  align-self: ${({ isRetracted }) => (isRetracted ? '' : 'flex-end')};
  transform: ${({ isRetracted }) => (isRetracted ? 'rotate(180deg)' : '')};
  transition: transform 0.5s ease;

  @media screen and (max-width: 1025px) {
    display: none;
  }
`

export const CloseContainer = styled.div`
  display: none;

  @media screen and (max-width: 1025px) {
    align-self: flex-end;
    font-weight: bold;
    display: flex;
    align-content: center;
  }
`

export const LinkContainer = styled(Link)`
  display: ${({ isRetracted }) => (isRetracted ? 'none' : '')};
`

export const MenuBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MenuFooter = styled(Link)``

export const Header = styled.div`
  display: none;
  padding: 2rem 3rem;

  @media screen and (max-width: 1025px) {
    padding: 2rem 1.5rem;
    display: flex;
    justify-content: space-between;
  }
`
