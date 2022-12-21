import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { editActivity, registerActivity } from '../services/api'

const ActivitiesContext = createContext()

export function ActivitiesProvider({ children }) {
  const [isModalActive, setModalVisibility] = useState(false)
  const [userActivities, setUserActivities] = useState([])

  const openActivityModal = () => {
    setModalVisibility(true)
  }

  const closeActivityModal = () => {
    setModalVisibility(false)
  }

  const submitActivity = (data, operation) => {
    closeActivityModal()

    if (operation === 'create') {
      return registerActivity(data)
    }

    return editActivity(data)
  }

  return (
    <ActivitiesContext.Provider
      value={{
        openActivityModal,
        closeActivityModal,
        submitActivity,
        isModalActive,
        setUserActivities,
        userActivities,
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
