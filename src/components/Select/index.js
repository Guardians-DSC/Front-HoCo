import React from 'react'
import PropTypes from 'prop-types'
import { Select as SelectDefault, Option, Wrapper } from './style'
import { DownOutlined } from '@ant-design/icons'
export const Select = ({ options }) => {
  return (
    <Wrapper>
      <SelectDefault defaultValue="default">
        <Option value="default" disabled>
          Selecionar
        </Option>
        {options.map((option, index) => (
          <Option value={option} key={index}>
            {option}
          </Option>
        ))}
      </SelectDefault>
      <DownOutlined />
    </Wrapper>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
}

Select.defaultProps = {
  options: ['sapato'],
}
