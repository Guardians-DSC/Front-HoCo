import React from 'react'

import { Organizations } from '../../components/Organizations'

import { Content, Title, Text } from '../../styles/base-styles.js'

export const Orgs = () => {
  return (
    <Content>
      <Title>Organizações</Title>
      <Text>
        {`Olá, querido usuário! Para que você saiba como ganhar algumas horinhas
        complementares fique de olho nessas organizações. Além de aprender muita 
        coisa massa, participar de eventos, palestras, mini-cursos, etc, 
        também te garante algumas horinhas extras.`}
      </Text>
      <Organizations />
    </Content>
  )
}
