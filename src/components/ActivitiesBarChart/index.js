/* eslint-disable react/prop-types */
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

import { Wrapper, GraphTitle } from './styles'

import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'

export const ActivitiesBarChart = ({ data }) => {
  const theme = useTheme()

  const updatedData = data.map((objectData) => {
    return {
      'creditos disponiveis': objectData.maximo - objectData.acumulado,
      ...objectData,
      top: 20,
    }
  })

  return (
    <Wrapper>
      <GraphTitle>Gráfico de barras das suas atividades complementares</GraphTitle>
      <ResponsiveContainer minWidth={380} width="100%" height={400}>
        <BarChart
          wrapperStyle={{ paddingLeft: 0 }}
          data={updatedData}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="categoria" />
          <YAxis dataKey="top" width={30} />
          <Tooltip
            cursor={{ fill: theme['third-background'] }}
            contentStyle={{ backgroundColor: theme['main-background'] }}
          />
          <Bar
            legendType="rect"
            dataKey="acumulado"
            stackId="a"
            maxBarSize={25}
            fill={theme['main-bar']}
          />
          <Bar
            legendType="rect"
            dataKey="creditos disponiveis"
            stackId="a"
            maxBarSize={25}
            fill={theme['second-bar']}
          />
          <Legend
            verticalAlign
            payload={[
              {
                value: 'Creditos acumulados',
                type: 'rect',
                color: theme['main-bar'],
              },
              {
                value: 'Creditos disponiveis',
                type: 'rect',
                color: theme['main-font'],
              },
            ]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

ActivitiesBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      categoria: PropTypes.string,
      acumulado: PropTypes.number,
      maximo: PropTypes.number,
      top: PropTypes.number,
    })
  ),
}

ActivitiesBarChart.defaultProps = {
  data: [
    {
      categoria: 'Projeto',
      acumulado: 12,
      maximo: 18,
    },
    {
      categoria: 'Monitoria',
      acumulado: 8,
      maximo: 16,
    },
    {
      categoria: 'Evento',
      acumulado: 2,
      maximo: 18,
    },
    {
      categoria: 'init. científica',
      acumulado: 8,
      maximo: 16,
    },
    {
      categoria: 'Estágio',
      acumulado: 15,
      maximo: 16,
    },
    {
      categoria: 'Caesi',
      acumulado: 9,
      maximo: 16,
    },
    {
      categoria: 'Atv. extensão',
      acumulado: 1,
      maximo: 14,
    },
    {
      categoria: 'Atv. profissionais',
      acumulado: 1,
      maximo: 16,
    },
    {
      categoria: 'outros',
      acumulado: 2,
      maximo: 16,
    },
  ],
}
