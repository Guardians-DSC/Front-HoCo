import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import eu from '../assets/images/eu.jpeg'

const UserContext = createContext()

export function UserProvider({ children }) {
  const [name, setName] = useState('Rodrigo Eloy')
  const [eMail, setEmail] = useState('rodrigo.cavalcanti@ccc.ufcg.edu.br')
  const [course, setCourse] = useState('Ciência da computação')
  const [registrationNumber, setRegistrationNumber] = useState('115478521')
  const [avatar, setAvatar] = useState(eu)

  const values = {
    name,
    setName,
    eMail,
    setEmail,
    course,
    setCourse,
    registrationNumber,
    setRegistrationNumber,
    avatar,
    setAvatar,
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
