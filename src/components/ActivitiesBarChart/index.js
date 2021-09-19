import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import { Wrapper, Title } from './styles'

import PropTypes from 'prop-types'

export const ActivitiesBarChart = ({ data }) => {
  console.log('vacas')
  return (
    <Wrapper>
      <Title>Gráfico de barras das suas atividades complementares</Title>
      <ResponsiveContainer minWidth={380} width="100%" height={400}>
        <BarChart
          wrapperStyle={{ paddingLeft: 0 }}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="top" width={30} />
          <Tooltip />
          <Legend />
          <Bar
            legendType="rect"
            dataKey="Creditos totais"
            BarSize={42}
            fill="#975858"
          />
          <Bar
            legendType="rect"
            dataKey="Max creditos"
            BarSize={42}
            fill="#343B4570"
          />
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

ActivitiesBarChart.propTypes = {
  data: PropTypes.shape([
    {
      name: PropTypes.string,
      'Creditos totais': PropTypes.string,
      'Max creditos': PropTypes.string,
      top: PropTypes.number,
    },
  ]),
}

ActivitiesBarChart.defaultProps = {
  data: [
    {
      name: 'Projeto',
      'Creditos totais': 12,
      'Max creditos': 18,
      top: 20,
    },
    {
      name: 'Monitoria',
      'Creditos totais': 8,
      'Max creditos': 16,
      top: 20,
    },
    {
      name: 'Evento',
      'Creditos totais': 2,
      'Max creditos': 18,
      top: 20,
    },
    {
      name: 'init. científica',
      'Creditos totais': 8,
      'Max creditos': 16,
      top: 20,
    },
    {
      name: 'Estágio',
      'Creditos totais': 15,
      'Max creditos': 16,
      top: 20,
    },
    {
      name: 'Caesi',
      'Creditos totais': 9,
      'Max creditos': 16,
      top: 20,
    },
    {
      name: 'Atv. extensão',
      'Creditos totais': 1,
      'Max creditos': 14,
      top: 20,
    },
    {
      name: 'Atv. profissionais',
      'Creditos totais': 1,
      'Max creditos': 16,
      top: 20,
    },
    {
      name: 'outros',
      'Creditos totais': 2,
      'Max creditos': 16,
      top: 20,
    },
  ],
}
