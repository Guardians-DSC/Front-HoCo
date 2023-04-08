import React from 'react'
import PropTypes from 'prop-types'
import { Category, TableHours } from './style'

export const HoursTable = ({ hours }) => {
  const columns = [
    {
      title: 'Categoria',
      align: 'center',
      width: '100px',
      key: 'category',
      render: (category) => <Category>{category.category}</Category>,
    },
    {
      title: 'Tempo (horas)',
      align: 'center',
      width: '50px',
      key: 'time',
      render: (category) => <p>{category.time}h</p>,
    },
  ]

  return <TableHours columns={columns} dataSource={hours} />
}

HoursTable.defaultProps = {
  hours: [],
}

HoursTable.propTypes = {
  hours: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      time: PropTypes.number,
    })
  ),
}
