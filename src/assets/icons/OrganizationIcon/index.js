import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'

const paths = [
  'M23.996 16H8.00267L8 15.1693C8 13.4907 8.13333 12.5213 10.1173 12.0627C12.3627 11.544 14.576 11.0813 13.5107 9.11733C10.356 3.3 12.612 0 15.9987 0C19.32 0 21.6333 3.17733 18.4867 9.11867C17.4533 11.0707 19.588 11.5347 21.88 12.064C23.8667 12.5227 23.9987 13.4933 23.9987 15.1747L23.996 16ZM30.4107 13.048C28.6907 12.6507 27.0907 12.3027 27.8653 10.8387C30.224 6.38267 28.4907 4 25.9987 4C24.312 4 23.0013 5.08933 23.0013 7.09867C23.0013 12.3027 26.0253 9.45867 25.996 16H31.9973L32 15.3827C32 14.1213 31.9013 13.392 30.4107 13.048ZM0.00266667 16H6.004C5.976 9.45867 8.99867 12.304 8.99867 7.09867C8.99867 5.08933 7.688 4 6.00133 4C3.50933 4 1.776 6.38267 4.136 10.8387C4.91067 12.304 3.31067 12.6507 1.59067 13.048C0.0986667 13.392 0 14.1213 0 15.3827L0.00266667 16Z',
]

export const OrganizationsIcon = ({ className, color, width }) => {
  const theme = useTheme()
  const currentColor =
    !color || color === theme['main-green'] ? theme['main-green'] : color

  return (
    <svg
      className={className}
      width={width}
      height={width * 1.2}
      viewBox="0 0 32 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map((path, index) => (
        <path d={path} fill={currentColor} key={index} />
      ))}
    </svg>
  )
}

OrganizationsIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
}

OrganizationsIcon.defaultProps = {
  className: 'ArrowContainer',
  width: 21,
}
