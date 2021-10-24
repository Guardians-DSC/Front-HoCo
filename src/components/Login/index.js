import React, { useState } from 'react'

import { LoginButton } from './styles'
import LoginModal from './LoginModal'

export const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleLogin = (data) => {
    console.log(data)
    setIsModalVisible(false)
  }

  return (
    <>
      <LoginButton
        onClick={() => {
          setIsModalVisible(true)
        }}
      >
        login
      </LoginButton>
      <LoginModal
        onModalClose={() => setIsModalVisible(false)}
        isModalVisible={isModalVisible}
        onModalOk={handleLogin}
      />
    </>
  )
}
