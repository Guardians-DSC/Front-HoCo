import React from 'react'
import { Logo } from '../../assets/icons/Logo'

import { Wrapper, MenuHeader, MenuBody, MenuFooter, ArrowContainer, OutWrapper } from './style'
import { pages } from '../../util/constants'
import { PageLink } from './PageLink'
import { Link } from 'react-router-dom'

export const Menu = () => {
  const handleRetract = () => {
    console.log('RETRACT')
  }

  return (
    <OutWrapper>
      <Wrapper>
        <MenuHeader>
          <ArrowContainer onClick={handleRetract} />
          <Link to='/sobre'>
            <Logo width={210} />
          </Link>
        </MenuHeader>
        <MenuBody>
          {pages.map((page, index) => {
            if (page.menu) {
              return <PageLink key={index} page={page} />
            }
          })}
        </MenuBody>
        <MenuFooter>
          Entrar
        </MenuFooter>
      </Wrapper>
    </OutWrapper>
  )
}
