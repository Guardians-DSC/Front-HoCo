import React, { createContext, useContext, useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import constants from '../util/constants'
import { useHistory } from 'react-router-dom'
import { themeDark, themeLight } from '../util/themes'

const PagesContext = createContext()

export function PagesProvider({ children }) {
  const history = useHistory()
  const [theme, setTheme] = useState(themeLight)

  const handleTheme = (themeName) => {
    console.log(themeName)
    setTheme(themeName === 'light' ? themeLight : themeDark)
    console.log(theme)
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

  return <PagesContext.Provider value={values}>{children}</PagesContext.Provider>
}

export default function usePagesContext() {
  const context = useContext(PagesContext)

  return { ...context }
}

PagesProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
