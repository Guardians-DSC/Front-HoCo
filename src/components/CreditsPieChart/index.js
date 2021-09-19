import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { Title, Wrapper } from './styles'
import PropTypes from 'prop-types'
import { compare } from '../../util/util'

const COLORS = ['#FF9090', '#FFB6B6', '#FF6A6A', '#975858', '#8884D8']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontWeight="bold"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export const CreditsPieChart = ({ data }) => {
  const sortedData = data.sort(compare)

  function sumValues(objects) {
    let finalSum = 0

    objects.map((object) => {
      finalSum += object.value
    })

    return finalSum
  }

  const finalData = [
    ...sortedData.slice(0, 4),
    { name: 'outros', value: sumValues(sortedData.slice(3, -1)) },
  ]

  return (
    <Wrapper>
      <Title>Proporção de cŕeditos de horas complementares</Title>
      <ResponsiveContainer minWidth={350} width="100%" height={400}>
        <PieChart>
          <Pie
            data={finalData}
            cx="50%"
            cy="45%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="90%"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend layout="horizontal" wrapperStyle={{ paddingLeft: 0 }} />
        </PieChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

CreditsPieChart.defaultProps = {
  data: [
    { name: 'Projeto', value: 400 },
    { name: 'Monitoria', value: 400 },
    { name: 'Evento', value: 400 },
    { name: 'Caesi', value: 300 },
    { name: 'Atv. extensã', value: 100 },
    { name: 'Atv. extenso', value: 100 },
    { name: 'Atv. extenão', value: 100 },
    { name: 'Atv. extesão', value: 100 },
  ],
}

CreditsPieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape([{ name: PropTypes.string, value: PropTypes.number }])
  ),
}
