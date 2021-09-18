import React from 'react'
import {
  Wrapper,
  Title,
  Icon,
  FormWrapper,
  Input,
  FormInfoWrapper,
  Item,
  Form,
  Devider,
  SubTitle,
} from './styles'
import { Profile } from '../../components/Profile'

export const Perfil = () => {
  return (
    <Wrapper>
      <Title>
        <Icon />
        Meu Perfil
      </Title>
      <SubTitle>Minhas informações</SubTitle>
      <FormWrapper>
        <Form>
          <Item label="Nome">
            <Input />
          </Item>
          <Item label="E-mail">
            <Input />
          </Item>
          <FormInfoWrapper>
            <Item label="Matrícula">
              <Input disabled />
            </Item>
            <Item label="Curso">
              <Input />
            </Item>
          </FormInfoWrapper>
        </Form>
        <Profile width={320} />
      </FormWrapper>
      <Devider />
    </Wrapper>
  )
}
