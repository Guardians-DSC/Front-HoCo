import { ClockCircleOutlined } from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { useTheme } from 'styled-components'
import { ActivitiesBarChart } from '../../components/ActivitiesBarChart'
import { CreditsPieChart } from '../../components/CreditsPieChart'
import { ProgressBar } from '../../components/ProgressBar'
import { Text, Title } from '../../styles/base-styles'
import { ProgressbarContainer, ChartsContainer, Charts } from './styles'

export const Horas = () => {
  const theme = useTheme()
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? (
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
      <Text>
        Esse é sua progressão de horas complementares atualmente, lembre-se você
        precisa de 22 créditos de atividades complementares para se formar.
      </Text>

      <ProgressbarContainer>
        <ProgressBar />
      </ProgressbarContainer>

      <Text>
        Para aumentar o seu número de horas complementares você pode cadastrar
        atividades das seguintes categorias: <span>Projeto</span>,{' '}
        <span>Eventos</span>, <span>Monitoria</span>, <span>Caesi</span> ou{' '}
        <span>Pet</span>.
      </Text>

      <ChartsContainer>
        <Text>Aqui estão algumas visualizações das suas horas complementares:</Text>

        <Charts>
          <CreditsPieChart />
          <ActivitiesBarChart />
        </Charts>
      </ChartsContainer>
    </>
  ) : (
    <Redirect to="/sobre" />
  )
}
