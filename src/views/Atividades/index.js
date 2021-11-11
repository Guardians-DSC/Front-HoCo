import { BookOutlined } from '@ant-design/icons'
import React from 'react'
import { ActivitiesTable } from '../../components/ActivitiesTable'
import { Button, Text, Title } from '../../styles/base-styles'
import { TableWrapper, Wrapper } from './styles'

export const Atividades = () => {
  const data = [
    {
      key: '1',
      title: 'Projeto ePol',
      credit: 12,
      category: 'projeto',
    },
    {
      key: '2',
      title: 'CodeSQ',
      credit: 12,
      category: 'projeto',
    },
    {
      key: '3',
      title: 'Andromedev',
      hours: 135,
      category: 'evento',
    },
    {
      key: '4',
      title: 'Hacktoberfest',
      hours: 20,
      category: 'evento',
    },
    {
      key: '5',
      title: 'Projeto ePol',
      credit: 12,
      category: 'projeto',
    },
    {
      key: '6',
      title: 'Andromedev',
      hours: 135,
      category: 'evento',
    },
    {
      key: '7',
      title: 'semana acadêmica',
      hours: 10,
      category: 'evento',
    },
  ]

  return (
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
        <Button onClick={() => console.log('vacas')}>Adicionar</Button>
        <div>
          <ActivitiesTable data={data} />
        </div>
      </TableWrapper>
    </Wrapper>
  )
}
