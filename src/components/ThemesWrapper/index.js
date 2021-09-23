import React from 'react'
import { DarkThemeIcon } from '../../assets/icons/DarkThemeIcon'
import { LightThemeIcon } from '../../assets/icons/LightThemeIcon'
import usePagesContext from '../../contexts/app.context'
import { Wrapper, ThemesContainer, Subtitle } from './styles'

export const ThemesWrapper = () => {
  const { handleTheme } = usePagesContext()

  return (
    <Wrapper>
      <Subtitle>Temas</Subtitle>
      <ThemesContainer>
        <div onClick={() => handleTheme('light')}>
          <LightThemeIcon />
        </div>
        <div onClick={() => handleTheme('dark')}>
          <DarkThemeIcon onClick={() => handleTheme('dark')} />
        </div>
      </ThemesContainer>
    </Wrapper>
  )
}
