import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'

import PropTypes from 'prop-types'
import constants from '../util/constants'
import { useHistory } from 'react-router-dom'

const PagesContext = createContext()

export function PagesProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const { themes, pages } = constants
  const history = useHistory()

  const getTheme = useCallback(() => {
    return JSON.parse(localStorage.getItem('@hoco/theme'))
  }, [])

  const currentTheme = getTheme()
  const [theme, setTheme] = useState(currentTheme ? currentTheme : themes['light'])

  const handleTheme = () => {
    let themeName = 'light'
    if (theme === themes['light']) {
      themeName = 'dark'
    }

    localStorage.setItem('@hoco/theme', JSON.stringify(themes[themeName]))
    setTheme(themes[themeName])
  }

  const [currentPathname, setCurrentPathname] = useState(
    window.location.pathname === '/' ? '/sobre' : window.location.pathname
  )

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
    loading,
    setLoading,
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
