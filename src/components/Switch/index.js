import React from 'react'
import usePagesContext from '../../contexts/app.context'
import themes from '../../util/constants/themes'
import { Wrapper, ThemeName } from './style'

export const Switch = () => {
  const { handleTheme, theme } = usePagesContext()

  return (
    <Wrapper onClick={handleTheme}>
      <ThemeName>{theme === themes['light'] ? 'light' : 'dark'}</ThemeName>
    </Wrapper>
  )
}
