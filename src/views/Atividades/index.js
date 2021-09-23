import React from 'react'
import { ActivitiesTable } from '../../components/ActivitiesTable'

export const Atividades = () => {
  const data = [
    {
      key: 1,
      title: 'Projeto ePol',
      credit: 12,
      category: 'projeto',
    },
    {
      key: 2,
      title: 'CodeSQ',
      credit: 12,
      category: 'projeto',
    },
    {
      key: 3,
      title: 'Andromedev',
      hours: 135,
      category: 'evento',
    },
    {
      key: 4,
      title: 'Hacktoberfest',
      hours: 20,
      category: 'evento',
    },
    {
      key: 5,
      title: 'Projeto ePol',
      credit: 12,
      category: 'projeto',
    },
    {
      key: 6,
      title: 'Andromedev',
      hours: 135,
      category: 'evento',
    },
    {
      key: 7,
      title: 'semana acadêmica',
      hours: 10,
      category: 'evento',
    },
  ]

  return (
    <div>
      Atividades
      <ActivitiesTable data={data} />
    </div>
  )
}
