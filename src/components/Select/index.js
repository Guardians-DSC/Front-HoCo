import React from 'react'
import PropTypes from 'prop-types'
import { Select as SelectDefault, Option, Wrapper } from './style'
import { useTheme } from 'styled-components'
import { DownOutlined } from '@ant-design/icons'

export const Select = ({ options, onChange, defaultOption }) => {
  const theme = useTheme()
  return (
    <Wrapper>
      <SelectDefault
        defaultValue={defaultOption?.length > 0 ? defaultOption : 'default'}
        onChange={(e) => onChange(e.target.value)}
      >
        <Option value="default" disabled>
          Selecionar
        </Option>
        {options.map((option, index) => (
          <Option value={option.toLowerCase()} key={index}>
            {option}
          </Option>
        ))}
      </SelectDefault>
      <DownOutlined style={{ color: theme['main-font'], pointerEvents: 'none' }} />
    </Wrapper>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
}
