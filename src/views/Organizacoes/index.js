import React from 'react'

import { Organizations } from '../../components/Organizations'
import { OrganizationsIcon } from '../../assets/icons/OrganizationIcon'
import { useTheme } from 'styled-components'
import { Content, Title, Text } from '../../styles/base-styles.js'

export const Orgs = () => {
  const theme = useTheme()

  return (
    <Content>
      <Title>
        <OrganizationsIcon width={32} color={theme['main-font']} />
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
