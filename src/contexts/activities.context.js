import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { editActivity, registerActivity } from '../services/api'
import { create_UUID } from '../util/util'

const ActivitiesContext = createContext()

export function ActivitiesProvider({ children }) {
  const [isModalActive, setModalVisibility] = useState(false)

  const openActivityModal = () => {
    setModalVisibility(true)
  }

  const closeActivityModal = () => {
    setModalVisibility(false)
  }

  const submitActivity = (data, operation) => {
    closeActivityModal()

    if (operation === 'create') {
      return registerActivity({
        id: create_UUID(),
        titulo: data.title,
        creditos: data.credits,
        horas: data.hours,
        categoria: data.category,
        file: data.uploadedFile,
      })
    }

    return editActivity(data.id, data)
  }

  return (
    <ActivitiesContext.Provider
      value={{
        openActivityModal,
        closeActivityModal,
        submitActivity,
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
