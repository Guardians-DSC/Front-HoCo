import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'styled-components'

export const Group = ({ className, color }) => {
  const theme = useTheme()

  const currentColor =
    !color || color === theme['main-green'] ? theme['main-green'] : color
  return (
    <svg
      className={className}
      width="21"
      height="11"
      viewBox="0 0 21 11"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.2508 10.92H5.08615L5.08446 10.3531C5.08446 9.20738 5.1692 8.54581 6.43015 8.23277C7.85718 7.87878 9.26389 7.56301 8.58681 6.22258C6.58183 2.25225 8.01565 0 10.1681 0C12.279 0 13.7492 2.16853 11.7493 6.22349C11.0926 7.55573 12.4493 7.87241 13.906 8.23368C15.1686 8.54672 15.2525 9.2092 15.2525 10.3567L15.2508 10.92ZM19.3277 8.90526C18.2346 8.63408 17.2177 8.39657 17.71 7.39739C19.2091 4.35617 18.1075 2.73 16.5236 2.73C15.4517 2.73 14.6187 3.47347 14.6187 4.84484C14.6187 8.39657 16.5406 6.45554 16.522 10.92H20.3361L20.3378 10.4987C20.3378 9.63781 20.2751 9.14004 19.3277 8.90526ZM0.00169482 10.92H3.81589C3.79809 6.45554 5.71917 8.39748 5.71917 4.84484C5.71917 3.47347 4.88617 2.73 3.81419 2.73C2.23038 2.73 1.12875 4.35617 2.62867 7.39739C3.12101 8.39748 2.10412 8.63408 1.01096 8.90526C0.0627083 9.14004 0 9.63781 0 10.4987L0.00169482 10.92V10.92Z"
        fill={currentColor}
      />
    </svg>
  )
}

Group.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
}

Group.defaultProps = {
  className: 'ArrowContainer',
}
