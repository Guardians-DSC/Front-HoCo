import React from 'react'

import PropTypes from 'prop-types'

import { Wrapper } from './style'

export const Button = ({ text, onClick }) => {
  return <Wrapper onClick={onClick}>{text}</Wrapper>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
