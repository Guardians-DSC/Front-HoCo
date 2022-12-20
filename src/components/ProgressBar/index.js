import React from 'react'
import PropTypes from 'prop-types'
import {
  OutWrapper,
  Wrapper,
  Progress,
  ProgressContainer,
  LimitExceded,
} from './styles'

export const ProgressBar = ({ credits, limit }) => {
  const porcentage = (credits / limit) * 100

  return (
    <OutWrapper>
      {credits > limit && <LimitExceded>Limite excedido</LimitExceded>}
      <Wrapper>
        <ProgressContainer>
          <Progress width={porcentage} />
        </ProgressContainer>
        <span>
          {credits}/{limit}
        </span>
      </Wrapper>
    </OutWrapper>
  )
}

ProgressBar.propTypes = {
  credits: PropTypes.number,
  limit: PropTypes.number,
}
