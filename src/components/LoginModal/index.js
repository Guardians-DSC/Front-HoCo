/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import { Form } from 'antd'
import { Button, Input, Modal } from '../../styles/base-styles'

import { Logo } from '../../assets/icons/Logo'
import { Title, OpenModalButton } from './styles'
import { useTheme } from 'styled-components'

const LoginModal = () => {
  const theme = useTheme()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [form] = Form.useForm()

  const initialLoginValues = {
    matricula: '',
    senha: '',
  }

  useEffect(() => {
    form.resetFields()
  }, [isModalVisible])

  const handleLoginSubmit = () => {
    setIsModalVisible(false)
    form.getFieldsValue()
  }

  const Footer = () => (
    <div>
      <Button onClick={handleLoginSubmit}>Fazer Login</Button>
    </div>
  )

  return (
    <>
      <OpenModalButton
        onClick={() => {
          setIsModalVisible(!isModalVisible)
        }}
      >
        login
      </OpenModalButton>
      <Modal
        title={<Logo color={theme['header-icons']} width={120} />}
        visible={isModalVisible}
        onOk={handleLoginSubmit}
        centered
        footer={<Footer />}
        onCancel={() => setIsModalVisible(false)}
      >
        <Title>Fazendo o Login</Title>
        <Form layout="vertical" initialValues={initialLoginValues} form={form}>
          <Form.Item name="matricula" label="Matrícula">
            <Input placeholder="Ex: 111111111" autoFocus />
          </Form.Item>
          <Form.Item name="senha" label="Senha">
            <Input type="password" placeholder="********" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default LoginModal
