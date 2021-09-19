import React from 'react'
import {
  Wrapper,
  Icon,
  FormWrapper,
  SameLineInfoWrapper,
  Form,
  ThemeWrapper,
  ThemesContainer,
} from './styles'
import { Profile } from '../../components/Profile'
import { Subtitle, Title, Item, Input } from '../../styles/base-styles'
import { LightTheme } from '../../assets/icons/LightTheme'
import { DarkTheme } from '../../assets/icons/DarkTheme'
import usePagesContext from '../../contexts/app.context'

export const Perfil = () => {
  const { handleTheme } = usePagesContext()

  return (
    <Wrapper>
      <Title>
        <Icon />
        Meu Perfil
      </Title>
      <Subtitle>Minhas informações</Subtitle>
      <FormWrapper>
        <Form>
          <Item label="Nome">
            <Input />
          </Item>
          <Item label="E-mail">
            <Input />
          </Item>
          <SameLineInfoWrapper>
            <Item label="Matrícula">
              <Input disabled />
            </Item>
            <Item label="Curso">
              <Input />
            </Item>
          </SameLineInfoWrapper>
        </Form>
        <Profile width={320} />
      </FormWrapper>
      <ThemeWrapper>
        <Subtitle>Temas</Subtitle>
        <ThemesContainer>
          <div onClick={() => handleTheme('light')}>
            <LightTheme />
          </div>
          <div onClick={() => handleTheme('dark')}>
            <DarkTheme onClick={() => handleTheme('dark')} />
          </div>
        </ThemesContainer>
      </ThemeWrapper>
    </Wrapper>
  )
}
