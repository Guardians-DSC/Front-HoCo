import React from 'react'
import useUserContext from '../../contexts/user.context'
import { Wrapper, FormWrapper, SameLineInfoWrapper, Subtitle } from './styles'
import { Item, Input, Form } from '../../styles/base-styles'
import { Profile } from '../Profile'

export const UserInfo = () => {
  const { name, email, userId, course } = useUserContext()

  return (
    <Wrapper>
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
    </Wrapper>
  )
}
