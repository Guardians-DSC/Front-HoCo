import React from 'react'
import { DarkThemeIcon } from '../../assets/icons/DarkThemeIcon'
import { LightThemeIcon } from '../../assets/icons/LightThemeIcon'
import usePagesContext from '../../contexts/app.context'
import { Wrapper, ThemesContainer, Subtitle, ThemeWrapper } from './styles'

export const ThemesWrapper = () => {
  const { handleTheme } = usePagesContext()

  return (
    <Wrapper>
      <Subtitle>Temas</Subtitle>
      <ThemesContainer>
        <ThemeWrapper onClick={() => handleTheme('light')}>
          <LightThemeIcon />
        </ThemeWrapper>
        <ThemeWrapper onClick={() => handleTheme('dark')}>
          <DarkThemeIcon onClick={() => handleTheme('dark')} />
        </ThemeWrapper>
      </ThemesContainer>
    </Wrapper>
  )
}
