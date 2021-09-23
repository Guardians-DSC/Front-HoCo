import React from 'react'
import {
  Wrapper,
  Icon,
  FormWrapper,
  SameLineInfoWrapper,
  Form,
  ThemeWrapper,
  ThemesContainer,
  Content,
  Subtitle,
  ButtonWrapper,
} from './styles'
import { Profile } from '../../components/Profile'
import { Title, Item, Input } from '../../styles/base-styles'
import { LightThemeIcon } from '../../assets/icons/LightThemeIcon'
import { DarkThemeIcon } from '../../assets/icons/DarkThemeIcon'
import usePagesContext from '../../contexts/app.context'
import useUserContext from '../../contexts/user.context'
import { Button } from '../../styles/base-styles'

export const Perfil = () => {
  const { handleTheme } = usePagesContext()
  const { name, email, userId, course } = useUserContext()

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
        <Subtitle>Minhas informações</Subtitle>
        <FormWrapper>
          <Form>
            <Item label="Nome">
              <Input defaultValue={name} />
            </Item>
            <Item label="E-mail">
              <Input defaultValue={email} />
            </Item>
            <SameLineInfoWrapper>
              <Item label="Matrícula">
                <Input defaultValue={userId} disabled />
              </Item>
              <Item label="Curso">
                <Input defaultValue={course} />
              </Item>
            </SameLineInfoWrapper>
          </Form>
          <Profile width={320} displayName={false} />
        </FormWrapper>
        <ThemeWrapper>
          <Subtitle>Temas</Subtitle>
          <ThemesContainer>
            <div onClick={() => handleTheme('light')}>
              <LightThemeIcon />
            </div>
            <div onClick={() => handleTheme('dark')}>
              <DarkThemeIcon onClick={() => handleTheme('dark')} />
            </div>
          </ThemesContainer>
        </ThemeWrapper>
        <ButtonWrapper>
          <Button onClick={handleSaveInfo}>Salvar alterações</Button>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  )
}
