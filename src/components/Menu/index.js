import React, { useState } from 'react'
import { Logo } from '../../assets/icons/Logo'

import { Wrapper, MenuHeader, MenuBody, MenuFooter, ArrowContainer, OutWrapper, LinkContainer } from './style'
import { pages } from '../../util/constants'
import { PageLink } from './PageLink'
import { Profile } from '../Profile'
import { Arrow } from '../../assets/icons/Arrow'

export const Menu = () => {
  const [isRetracted, setIsRetracted] = useState(false)
  const handleRetract = () => {
    setIsRetracted(!isRetracted)
    console.log(isRetracted)
  }

  return (
    <OutWrapper isRetracted={isRetracted}>
      <Wrapper isRetracted={isRetracted}>
        <MenuHeader isRetracted={isRetracted}>
          <ArrowContainer onClick={handleRetract} isRetracted={isRetracted}>
            <Arrow />
          </ArrowContainer>
          <LinkContainer to='/sobre' isRetracted={isRetracted}>
            <Logo width={210} />
          </LinkContainer>
        </MenuHeader>
        <MenuBody>
          {pages.map((page, index) => {
            if (page.menu) {
              return <PageLink key={index} page={page} isRetracted={isRetracted} />
            }
          })}
        </MenuBody>
        <MenuFooter to='/perfil'>
          <Profile isRetracted={isRetracted} />
        </MenuFooter>
      </Wrapper>
    </OutWrapper>
  )
}
