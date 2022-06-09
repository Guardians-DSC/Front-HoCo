import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const ActivitiesContext = createContext()

export function ActivitiesProvider({ children }) {
  const [isModalActive, setModalVisibility] = useState(false)

  const openActivityModal = () => {
    setModalVisibility(true)
  }

  const closeActivityModal = () => {
    setModalVisibility(false)
  }

  return (
    <ActivitiesContext.Provider
      value={{
        openActivityModal,
        closeActivityModal,
        isModalActive,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  )
}

export default function useActivitiesContext() {
  const context = useContext(ActivitiesContext)

  return { ...context }
}

ActivitiesProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
