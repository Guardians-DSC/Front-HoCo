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
import { LightTheme } from '../../assets/icons/LightTheme'
import { DarkTheme } from '../../assets/icons/DarkTheme'
import usePagesContext from '../../contexts/app.context'
import useUserContext from '../../contexts/user.context'
import { Button } from '../../components/Button'

export const Perfil = () => {
  const { handleTheme } = usePagesContext()
  const { name, eMail, registrationNumber, course } = useUserContext()

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
              <Input defaultValue={eMail} />
            </Item>
            <SameLineInfoWrapper>
              <Item label="Matrícula">
                <Input defaultValue={registrationNumber} disabled />
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
              <LightTheme />
            </div>
            <div onClick={() => handleTheme('dark')}>
              <DarkTheme onClick={() => handleTheme('dark')} />
            </div>
          </ThemesContainer>
        </ThemeWrapper>
        <ButtonWrapper>
          <Button text="Salvar alterações" onClick={handleSaveInfo} />
        </ButtonWrapper>
      </Content>
    </Wrapper>
  )
}
