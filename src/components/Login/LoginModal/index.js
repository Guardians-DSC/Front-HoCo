import React, { useCallback } from 'react'

import PropTypes from 'prop-types'

import { Form } from 'antd'
import { Button, Modal } from '../../../styles/base-styles'

import { Title, Input } from '../styles'
import { useTheme } from 'styled-components'
import { Logo } from '../../../assets/icons/Logo'

const LoginModal = ({ isModalVisible, onModalOk, onModalClose }) => {
  const theme = useTheme()
  const [form] = Form.useForm()

  const handleLoginSubmit = useCallback(async () => {
    form
      .validateFields()
      .then(() => {
        onModalOk(form.getFieldsValue())
      })
      .catch(({ errorFields }) => {
        console.log(errorFields)
      })
  }, [form])

  const Footer = () => (
    <div>
      <Button onClick={handleLoginSubmit}>Fazer Login</Button>
    </div>
  )

  return (
    <Modal
      title={<Logo color={theme['header-icons']} width={120} />}
      visible={isModalVisible}
      onOk={handleLoginSubmit}
      destroyOnClose
      centered
      footer={<Footer />}
      onCancel={onModalClose}
    >
      <Title>Fazendo o login</Title>
      <Form layout="vertical" form={form} preserve={false}>
        <Form.Item name="matricula" label="Matrícula" rules={[{ required: true }]}>
          <Input placeholder="Ex: 111111111" autoFocus />
        </Form.Item>
        <Form.Item name="senha" label="Senha" rules={[{ required: true }]}>
          <Input type="password" placeholder="********" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

LoginModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  onModalOk: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired,
}

export default LoginModal
