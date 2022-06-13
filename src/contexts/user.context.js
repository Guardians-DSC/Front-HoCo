import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import eu from '../assets/images/eu.jpeg'
import { useForm } from '../hooks/useForm'

const UserContext = createContext()

export function UserProvider({ children }) {
  const [{ formState }, { handleFormChange }] = useForm({
    name: 'Rodrigo Eloy',
    email: 'rodrigo.cavalcanti@ccc.ufcg.edu.br',
    course: 'Ciência da computação',
    userId: '118210111',
    avatar: eu,
  })

  const values = {
    ...formState,
    setName: handleFormChange('name'),
    setEmail: handleFormChange('email'),
    setCourse: handleFormChange('course'),
    setUserId: handleFormChange('userId'),
    setAvatar: handleFormChange('avatar'),
  }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default function useUserContext() {
  const context = useContext(UserContext)

  return { ...context }
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
