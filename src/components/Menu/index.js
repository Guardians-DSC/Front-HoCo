import React, { useEffect, useState } from 'react'
import { Logo } from '../../assets/icons/Logo'
import { Link } from 'react-router-dom'

import {
  Wrapper,
  MenuHeader,
  MenuBody,
  MenuFooter,
  ArrowContainer,
  OutWrapper,
  LinkContainer,
  Header,
  Body,
  CloseContainer,
} from './style'
import constants from '../../util/constants'
import { PageLink } from './PageLink'
import { Profile } from '../Profile'
import { Arrow } from '../../assets/icons/Arrow'

import PropTypes from 'prop-types'
import { BurguerMenu } from '../../assets/icons/BurguerMenu'
import { CloseOutlined } from '@ant-design/icons'

export const Menu = ({ children }) => {
  const [isRetracted, setIsRetracted] = useState(
    localStorage.getItem('retracted') === 'true'
  )
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    localStorage.setItem('retracted', isRetracted)
  }, [isRetracted])

  const handleRetract = () => {
    setIsRetracted(!isRetracted)
  }

  const handleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <OutWrapper isRetracted={isRetracted} isActive={isActive}>
        <Wrapper isRetracted={isRetracted}>
          <MenuHeader isRetracted={isRetracted}>
            <ArrowContainer onClick={handleRetract} isRetracted={isRetracted}>
              <Arrow />
            </ArrowContainer>
            <CloseContainer onClick={handleActive}>
              <CloseOutlined style={{ fontSize: '24px', color: '#f5f5f5' }} />
            </CloseContainer>
            <LinkContainer
              to="/sobre"
              onClick={() => setIsActive(false)}
              isRetracted={isRetracted}
              isActive={isActive}
            >
              <Logo width={200} />
            </LinkContainer>
          </MenuHeader>
          <MenuBody>
            {constants.pages.map((page, index) => {
              if (page.menu) {
                return (
                  <PageLink
                    key={index}
                    setIsActive={setIsActive}
                    page={page}
                    isRetracted={isRetracted}
                  />
                )
              }
            })}
          </MenuBody>
          <MenuFooter to="/perfil" onClick={() => setIsActive(false)}>
            <Profile isRetracted={isRetracted} />
          </MenuFooter>
        </Wrapper>
      </OutWrapper>
      <Body>
        <Header>
          <div onClick={handleActive}>
            <BurguerMenu />
          </div>
          <Link to="/sobre">
            <Logo width={100} onClick={() => setIsActive(false)} color="#5E966A" />
          </Link>
        </Header>
        {children}
      </Body>
    </>
  )
}

Menu.propTypes = {
  children: PropTypes.element,
}
