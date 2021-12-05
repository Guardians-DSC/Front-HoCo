import { BookOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { ActivitiesTable } from '../../components/ActivitiesTable'
import { ActivityModal } from '../../components/ActivityModal'
import { getActivities } from '../../services/api'
import { Button, Text, Title } from '../../styles/base-styles'
import { TableWrapper, Wrapper } from './styles'

export const Atividades = () => {
  const [isActive, setIsActive] = useState(false)
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getActivities()
      setActivities(data)
    }

    getData()
  }, [])

  return (
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
          <Button onClick={() => setIsActive(true)}>Adicionar</Button>
          <div>
            <ActivitiesTable setIsActive={setIsActive} data={activities} />
          </div>
        </TableWrapper>
        {isActive ? <ActivityModal setIsActive={setIsActive} /> : <></>}
      </Wrapper>
    )
  )
}
