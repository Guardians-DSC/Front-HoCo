import React, { useEffect, useState } from 'react'

import { Organizations } from '../../components/Organizations'
import { OrganizationsIcon } from '../../assets/icons/OrganizationIcon'
import { useTheme } from 'styled-components'
import { Content, Title, Text } from '../../styles/base-styles.js'
import { getOrgs } from '../../services/api'
import usePagesContext from '../../contexts/app.context'

export const Orgs = () => {
  const [orgs, setOrgs] = useState([])
  const { setLoading } = usePagesContext()

  const theme = useTheme()

  useEffect(() => {
    const getData = async () => {
      const data = await getOrgs()
      setOrgs(data)
      setLoading(false)
    }

    getData()
  }, [])

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
      <Organizations orgs={orgs} />
    </Content>
  )
}
