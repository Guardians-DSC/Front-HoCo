import React from 'react'
import { Wrapper, Icon, Content, ButtonWrapper } from './styles'
import { Title } from '../../styles/base-styles'
import { Button } from '../../styles/base-styles'
import { UserInfo } from '../../components/UserInfo'
import { ThemesWrapper } from '../../components/ThemesWrapper'

export const Perfil = () => {
  const handleSaveInfo = () => {
    console.log('Salvando...')
  }

  return (
    <Wrapper>
      <Title>
        <Icon />
        Meu Perfil
      </Title>
      <Content>
        <UserInfo />
        <ThemesWrapper />
        <ButtonWrapper>
          <Button onClick={handleSaveInfo}>Salvar alterações</Button>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  )
}
