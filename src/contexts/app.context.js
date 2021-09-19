import React, { createContext, useContext, useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import constants from '../util/constants'
import { useHistory } from 'react-router-dom'
import { themeDark, themeLight } from '../util/themes'

const PagesContext = createContext()

export function PagesProvider({ children }) {
  const history = useHistory()
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('@hoco/theme'))
      ? JSON.parse(localStorage.getItem('@hoco/theme'))
      : themeLight
  )

  const handleTheme = (themeName) => {
    const currentTheme = themeName === 'light' ? themeLight : themeDark
    localStorage.setItem('@hoco/theme', JSON.stringify(currentTheme))

    setTheme(JSON.parse(localStorage.getItem('@hoco/theme')))
  }

  const [currentPathname, setCurrentPathname] = useState(window.location.pathname)
  const { pages } = constants

  useEffect(() => {
    history.listen((location) => {
      setCurrentPathname(location.pathname)
    })
  }, [history, setCurrentPathname])

  const values = {
    currentPathname,
    setCurrentPathname,
    pages,
    theme,
    handleTheme,
  }

  return (
    theme && <PagesContext.Provider value={values}>{children}</PagesContext.Provider>
  )
}

export default function usePagesContext() {
  const context = useContext(PagesContext)

  return { ...context }
}

PagesProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
