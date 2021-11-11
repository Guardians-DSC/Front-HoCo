/* eslint-disable react/prop-types */
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { Wrapper, GraphTitle, Text } from './styles'
import PropTypes from 'prop-types'
import { compare } from '../../util/util'
import {
  SALMON,
  DARK_SALMON,
  BURGUNDY,
  PURPLE,
  LIGHT_PURPLE,
} from '../../util/constants/colors'
import { RADIAN, MAX_NUM_CATEGORIES } from '../../util/constants/numbers'

const COLORS = [SALMON, DARK_SALMON, BURGUNDY, PURPLE, LIGHT_PURPLE]

const customizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const horizontalAlign = cx + radius * Math.cos(-midAngle * RADIAN)
  const verticalAlign = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text
      x={horizontalAlign}
      y={verticalAlign}
      fill="white"
      fontWeight="bold"
      textAnchor={horizontalAlign > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export const CreditsPieChart = ({ data }) => {
  const sortedData = data.sort(compare)

  function sumValues(objects) {
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue.value
    return objects.reduce(reducer, 0)
  }

  const finalData = [
    ...sortedData.slice(0, MAX_NUM_CATEGORIES),
    {
      name: 'outros',
      // sum the values from the max_categories until the end of the array
      value: sumValues(sortedData.slice(MAX_NUM_CATEGORIES - 1, -1)),
    },
  ]

  return (
    <Wrapper>
      <GraphTitle>Proporção de créditos de horas complementares</GraphTitle>
      <ResponsiveContainer minWidth={350} width="100%" height={400}>
        <PieChart>
          <Pie
            data={finalData}
            cx="50%"
            cy="45%"
            labelLine={false}
            label={customizedLabel}
            outerRadius="90%"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend layout="horizontal" wrapperStyle={{ paddingLeft: 0 }} />
        </PieChart>
      </ResponsiveContainer>
      <Text>
        Você tem 11 créditos aprovados atualmente e as suas principais fontes de
        atividades <br /> complementares são <span>{sortedData[0].name}</span>,
        <span>{sortedData[1].name}</span> e <span>{sortedData[2].name}</span>.
      </Text>
    </Wrapper>
  )
}

CreditsPieChart.defaultProps = {
  data: [
    { name: 'Projeto', value: 12 },
    { name: 'Monitoria', value: 8 },
    { name: 'Evento', value: 4 },
    { name: 'Caesi', value: 1 },
    { name: 'Atv. extensã', value: 2 },
    { name: 'Atv. extenso', value: 1 },
    { name: 'Atv. extenão', value: 1 },
    { name: 'Atv. extesão', value: 1 },
  ],
}

CreditsPieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, value: PropTypes.number })
  ),
}
