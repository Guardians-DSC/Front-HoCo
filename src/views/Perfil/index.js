import React from 'react'
import { Form } from 'antd'
import {
  Wrapper,
  Title,
  Icon,
  FormWrapper,
  Input,
  FormInfoWrapper,
  Item,
} from './styles'

export const Perfil = () => {
  return (
    <Wrapper>
      <Title>
        <Icon />
        Meu Perfil
      </Title>
      <FormWrapper>
        <Form.Item label="Nome">
          <Input />
        </Form.Item>
        <Form.Item label="E-mail">
          <Input />
        </Form.Item>
        <FormInfoWrapper>
          <Item label="Matrícula">
            <Input disabled />
          </Item>
          <Form.Item label="Curso">
            <Input />
          </Form.Item>
        </FormInfoWrapper>
      </FormWrapper>
    </Wrapper>
  )
}
