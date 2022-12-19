import React from 'react'
import { Wrapper, Icon, Content, ButtonWrapper } from './styles'
import { Title } from '../../styles/base-styles'
import { UserInfo } from '../../components/UserInfo'
import { ThemesWrapper } from '../../components/ThemesWrapper'
import { useAuth0 } from '@auth0/auth0-react'
import { LogoutButton } from '../../components/LogoutButton'
import { Redirect } from 'react-router-dom'

export const Perfil = () => {
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? (
    <Wrapper>
      <Title>
        <Icon />
        Meu Perfil
      </Title>
      <Content>
        <UserInfo />
        <ThemesWrapper />
        <ButtonWrapper>
          <LogoutButton />
        </ButtonWrapper>
      </Content>
    </Wrapper>
  ) : (
    <Redirect to="/sobre" />
  )
}
