import React, { useEffect, useState } from 'react'
import { Logo } from '../../assets/icons/Logo'

import constants from '../../util/constants'
import { PageLink } from './PageLink'
import { Profile } from '../Profile'
import { Arrow } from '../../assets/icons/Arrow'

import { BurguerMenu } from '../../assets/icons/BurguerMenu'
import { CloseOutlined } from '@ant-design/icons'
import { useTheme } from 'styled-components'
import useUserContext from '../../contexts/user.context'
import {
  Wrapper,
  MenuHeader,
  MenuBody,
  ArrowContainer,
  OutWrapper,
  LinkContainer,
  Header,
  CloseContainer,
  BurguerContainer,
} from './style'

export const Menu = () => {
  const { name } = useUserContext()
  const [isretracted, setisretracted] = useState(
    localStorage.getItem('@hoco/retracted') === 'true'
  )

  const [isactive, setisactive] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    localStorage.setItem('@hoco/retracted', isretracted)
  }, [isretracted])

  const handleRetract = () => {
    setisretracted(!isretracted)
  }

  const handleActive = () => {
    setisretracted(false)
    setisactive(!isactive)
  }

  const handleOutClick = (e) => {
    e.stopPropagation()

    if (isactive) {
      setisactive(false)
    }
  }

  return (
    <>
      <OutWrapper
        onClick={handleOutClick}
        isretracted={isretracted ? 1 : 0}
        isactive={isactive ? 1 : 0}
      >
        <Wrapper isretracted={isretracted ? 1 : 0}>
          <MenuHeader isretracted={isretracted ? 1 : 0}>
            <ArrowContainer
              onClick={handleRetract}
              isretracted={isretracted ? 1 : 0}
            >
              <Arrow />
            </ArrowContainer>
            <CloseContainer onClick={handleActive}>
              <CloseOutlined style={{ fontSize: '24px', color: '#f5f5f5' }} />
            </CloseContainer>
            <LinkContainer
              to="/sobre"
              onClick={() => setisactive(false)}
              isretracted={isretracted ? 1 : 0}
              isactive={isactive ? 1 : 0}
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
                    setisactive={setisactive}
                    page={page}
                    isretracted={isretracted}
                  />
                )
              }
            })}
          </MenuBody>
          <Profile isretracted={isretracted} name={name} />
        </Wrapper>
      </OutWrapper>
      <Header>
        <BurguerContainer onClick={handleActive}>
          <BurguerMenu color={theme['header-icons']} />
        </BurguerContainer>
      </Header>
    </>
  )
}
