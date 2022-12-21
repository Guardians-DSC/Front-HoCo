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
import { RADIAN } from '../../util/constants/numbers'

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
  const sortedData = data.categories.sort(compare)

  let filteredData = sortedData.filter((cell) => {
    return cell.category_piece !== 0
  })

  let finalData = filteredData.map((cell) => {
    return {
      ...cell,
      name: cell.category,
      value: Number(cell.category_piece),
    }
  })

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
            {data.categories.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend layout="horizontal" wrapperStyle={{ paddingLeft: 0 }} />
        </PieChart>
      </ResponsiveContainer>
      <Text>
        Você tem 11 créditos aprovados atualmente e as suas principais fontes de
        atividades <br /> complementares são <span>{sortedData[0]?.category}</span>,
        <span>{sortedData[1]?.category}</span> e{' '}
        <span>{sortedData[2]?.category}</span>.
      </Text>
    </Wrapper>
  )
}

CreditsPieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ category: PropTypes.string, category_piece: PropTypes.number })
  ),
}
