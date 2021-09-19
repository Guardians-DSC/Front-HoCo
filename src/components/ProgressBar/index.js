import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Progress, ProgressContainer } from './styles'

export const ProgressBar = ({ credits, limit }) => {
  const porcentage = (credits / limit) * 100
  console.log(porcentage)

  return (
    <Wrapper>
      <ProgressContainer>
        <Progress width={porcentage} />
      </ProgressContainer>
      <span>
        {credits}/{limit}
      </span>
    </Wrapper>
  )
}

ProgressBar.propTypes = {
  credits: PropTypes.number,
  limit: PropTypes.number,
}

ProgressBar.defaultProps = {
  credits: 12,
  limit: 22,
}
