import React from 'react'
import PropTypes from 'prop-types'

export const BurguerMenu = ({ color, width }) => {
  return (
    <div>
      <svg
        width={width}
        height={width * (4 / 5)}
        viewBox="0 0 75 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M75 6.3C75 9.77939 72.1794 12.6 68.7 12.6H6.3C2.82061 12.6 0 9.77939 0 6.3V6.3C0 2.82061 2.82061 0 6.3 0H68.7C72.1794 0 75 2.82061 75 6.3V6.3ZM75 31.5C75 28.0206 72.1794 25.2 68.7 25.2H6.3C2.82061 25.2 0 28.0206 0 31.5V31.5C0 34.9794 2.82061 37.8 6.3 37.8H68.7C72.1794 37.8 75 34.9794 75 31.5V31.5ZM75 56.7C75 53.2206 72.1794 50.4 68.7 50.4H6.3C2.82061 50.4 0 53.2206 0 56.7V56.7C0 60.1794 2.82061 63 6.3 63H68.7C72.1794 63 75 60.1794 75 56.7V56.7Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

BurguerMenu.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
}

BurguerMenu.defaultProps = {
  color: '#5E966A',
  width: 24,
}
