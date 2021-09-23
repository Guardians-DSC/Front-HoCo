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
  CloseContainer,
} from './style'
import constants from '../../util/constants'
import { PageLink } from './PageLink'
import { Profile } from '../Profile'
import { Arrow } from '../../assets/icons/Arrow'

import { BurguerMenu } from '../../assets/icons/BurguerMenu'
import { CloseOutlined } from '@ant-design/icons'
import { useTheme } from 'styled-components'

export const Menu = () => {
  const [isRetracted, setIsRetracted] = useState(
    localStorage.getItem('retracted') === 'true'
  )
  const [isActive, setIsActive] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    localStorage.setItem('retracted', isRetracted)
  }, [isRetracted])

  const handleRetract = () => {
    setIsRetracted(!isRetracted)
  }

  const handleActive = () => {
    setIsRetracted(false)
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
            <Profile isRetracted={isRetracted} name="Rodrigo Eloy" />
          </MenuFooter>
        </Wrapper>
      </OutWrapper>
      <Header>
        <div onClick={handleActive}>
          <BurguerMenu color={theme['header-icons']} />
        </div>
        <Link to="/sobre">
          <Logo
            width={100}
            onClick={() => setIsActive(false)}
            color={theme['header-icons']}
          />
        </Link>
      </Header>
    </>
  )
}
