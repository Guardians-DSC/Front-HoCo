import { ClockCircleOutlined } from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useHistory } from 'react-router-dom'
import { ActivitiesBarChart } from '../../components/ActivitiesBarChart'
import { CreditsPieChart } from '../../components/CreditsPieChart'
import { ProgressBar } from '../../components/ProgressBar'
import { getUserData } from '../../services/api'
import { Title } from '../../styles/base-styles'
import {
  ProgressbarContainer,
  ChartsContainer,
  Charts,
  Subtitle,
  Text,
} from './styles'
import { HoursTable } from '../../components/HoursTable'

export const Horas = () => {
  const theme = useTheme()
  const { user, isAuthenticated } = useAuth0()
  const [userData, setUserData] = useState({
    amount: 0,
    max: 22,
    categories: [],
    hours: [],
  })
  const navigate = useHistory()

  useEffect(() => {
    const getData = async () => {
      const response = await getUserData(user?.email)
      setUserData(response)
    }

    if (!isAuthenticated) {
      navigate.push('/sobre')
    }
    getData()
  }, [])

  return (
    isAuthenticated && (
      <>
        <Title>
          <ClockCircleOutlined
            style={{ fontSize: '2rem', color: [theme['main-font']] }}
          />
          Minhas Horas
        </Title>
        <Text>
          Bom, essa página existe para que você possa entender como está sua situação
          atual em relação as suas horas complementares através de algumas
          visualizações com gráficos e textos.
        </Text>
        <Subtitle>Créditos</Subtitle>
        <Text>
          Parte que realmente mostra se você pode ser formar. Atenção, você precisa
          de 22 créditos
        </Text>

        <ProgressbarContainer>
          <ProgressBar credits={userData.amount} limit={userData.max} />
        </ProgressbarContainer>

        <Subtitle>Horas</Subtitle>
        <Text>
          Como não é possível fazer a conversão direta das atividades contabilizadas
          em horas para créditos sem a avaliação do colegiado essa subseção existe
          para você poder visualizar essas atividades contabilizadas em horas.
        </Text>
        <HoursTable hours={userData.hours} />

        <Text>
          Para aumentar o seu número de horas complementares você pode cadastrar
          atividades das seguintes categorias: <span>Projeto</span>,{' '}
          <span>Eventos</span>, <span>Monitoria</span>, <span>Caesi</span> ou{' '}
          <span>Pet</span>.
        </Text>

        <ChartsContainer>
          <Text>
            Aqui estão algumas visualizações das suas horas complementares:
          </Text>

          <Charts>
            <CreditsPieChart data={userData} />
            <ActivitiesBarChart data={userData} />
          </Charts>
        </ChartsContainer>
      </>
    )
  )
}
