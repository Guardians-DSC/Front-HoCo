import React from 'react'
import { Wrapper, FormWrapper, Subtitle } from './styles'
import { Item, Input, Form } from '../../styles/base-styles'
import { Profile } from '../Profile'
import { useAuth0 } from '@auth0/auth0-react'

export const UserInfo = () => {
  const { user } = useAuth0()

  return (
    <Wrapper>
      <Subtitle>Minhas informações</Subtitle>
      <FormWrapper>
        <Form>
          <Item label="Nome">
            <Input defaultValue={user.name} disabled />
          </Item>
          <Item label="E-mail">
            <Input defaultValue={user.email} disabled />
          </Item>
        </Form>
        <Profile width={320} displayName={false} />
      </FormWrapper>
    </Wrapper>
  )
}
