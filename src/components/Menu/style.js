import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const OutWrapper = styled.div`
  height: 100%;
  position: relative;
  margin-right: ${({ isretracted }) => (isretracted ? '5rem' : '18rem')};
  transition: 0.3s;
  z-index: 10;

  @media screen and (max-width: 1025px) {
    transform: ${({ isactive }) => (isactive ? '' : 'translate(-100vw)')};
    position: absolute;
  }
`
export const Wrapper = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: fixed;
  background-color: ${(props) => props.theme['main-green']};
  height: inherit;
  width: ${({ isretracted }) => (isretracted ? '5rem' : '18rem')};
  padding: ${({ isretracted }) => (isretracted ? '2rem 0rem' : '1.5rem 2rem')};
  justify-content: space-between;
  box-sizing: border-box;
  transition: width 0.5s, background-color 0.3s;
  overflow-x: hidden;

  svg {
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    display: none;
  }

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
  align-self: ${({ isretracted }) => (isretracted ? '' : 'flex-end')};
  transform: ${({ isretracted }) => (isretracted ? 'rotate(180deg)' : '')};
  transition: 0.5s ease;

  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 1025px) {
    display: none;
  }
`

export const CloseContainer = styled.div`
  display: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 1025px) {
    align-self: flex-end;
    font-weight: bold;
    display: flex;
    align-content: center;
  }
`

export const LinkContainer = styled(Link)`
  display: ${({ isretracted }) => (isretracted ? 'none' : '')};
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`

export const MenuBody = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`

export const MenuFooter = styled.div`
  color: #f5f5f5;
  margin-bottom: 0.5rem;
`

export const Header = styled.header`
  display: none;
  padding: 2rem 3rem;
  background-color: transparent;

  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 1025px) {
    padding: 2rem 1.5rem;
    display: flex;
    justify-content: space-between;
  }
`
export const BurguerContainer = styled.div`
  transition: 0.3s;

  &:hover {
    opacity: 0.6;
  }
`

export const HeaderLogoContainer = styled.div`
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`
