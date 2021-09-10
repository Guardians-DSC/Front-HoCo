import React from 'react'
import PropTypes from 'prop-types'

export const Arrow = ({ className, color, width }) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={Math.pow(Math.sqrt(width) + 1, 2)}
        viewBox="0 0 25 16"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM25 7L1 7V9L25 9V7Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

Arrow.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
}

Arrow.defaultProps = {
  className: 'ArrowContainer',
  color: '#fff',
  width: 32,
}
