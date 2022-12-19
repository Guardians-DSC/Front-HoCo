import { BookOutlined } from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { ActivitiesTable } from '../../components/ActivitiesTable'
import { ActivityModal } from '../../components/ActivityModal'
import useActivitiesContext from '../../contexts/activities.context'
import { getActivities } from '../../services/api'
import { Button, Text, Title } from '../../styles/base-styles'
import { TableWrapper, Wrapper, ButtonsWrapper } from './styles'

export const Atividades = () => {
  const { openActivityModal, isModalActive } = useActivitiesContext()
  const [activities, setActivities] = useState([])
  const { isAuthenticated } = useAuth0()

  useEffect(() => {
    const getData = async () => {
      const data = await getActivities()
      setActivities(data)
    }

    getData()
  }, [])

  return isAuthenticated ? (
    activities && (
      <Wrapper>
        <Title>
          <BookOutlined />
          Minhas Atividades
        </Title>
        <div>
          <Text>
            Olá usuário! Essas são suas horas complementares do curso até agora.
          </Text>
          <Text>
            Suas horas complementares refletem de certa foram o quão engajade você é
            nas atividades extra-curriculares do nosso curso. Caso você queira saber
            mais um pouco das organizações que promovem atividades que contam horas
            complementares acesse a página “Organizações”.
          </Text>
          <Text>
            Se você quiser cadastrar alguma atividade complementar que não consta na
            lista abaixo, clique no botão “adicionar”.
          </Text>
        </div>
        <TableWrapper>
          <ButtonsWrapper>
            <Button onClick={openActivityModal}>Adicionar</Button>
            <Button variable="second" onClick={() => console.log('baixando doc...')}>
              Baixar documentação
            </Button>
          </ButtonsWrapper>
          <div>
            <ActivitiesTable data={activities} />
          </div>
        </TableWrapper>
        {isModalActive && <ActivityModal />}
      </Wrapper>
    )
  ) : (
    <Redirect to="/sobre" />
  )
}
