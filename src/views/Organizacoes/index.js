import React from 'react'

import { Organizations } from '../../components/Organizations'
import { OrganizationsIcon } from '../../assets/icons/OrganizationIcon'

import { Content, Title, Text } from '../../styles/base-styles.js'

export const Orgs = () => {
  return (
    <Content>
      <Title>
        <OrganizationsIcon width={'2rem'} color={'#514E4E'} />
        {`Organizações`}
      </Title>
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
