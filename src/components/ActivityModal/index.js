/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CloseOutlined, FileTextOutlined, InboxOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { Text, Title, Item, Input, Button } from '../../styles/base-styles'
import categories from '../../util/constants/categories'
import { Select } from '../Select'
import { UploadFile } from '../UploadFile'
import { OutWrapper, Wrapper, Header, Form } from './style'

export const ActivityModal = ({ setIsActive }) => {
  const theme = useTheme()
  const [hours, setHours] = useState('')
  const [credits, setCredits] = useState('')
  const [title, setTitle] = useState('')
  const [fileList, setFileList] = useState([])
  const filteredCategories = Object.keys(categories).map((category, index) => {
    return categories[category].text
  })

  const onUpload = ({ fileList, newFileList }) => {
    console.log(newFileList)
    setFileList(newFileList)
  }

  const handleSubmit = () => {
    console.log(fileList)
    setIsActive(false)
  }

  const style = { background: '#0092ff', padding: '8px 0' }

  return (
    <OutWrapper onClick={() => setIsActive(false)}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>
            <FileTextOutlined /> Cadastrar Atividade
          </Title>
          <CloseOutlined
            style={{ fontSize: '28px' }}
            onClick={() => setIsActive(false)}
          />
        </Header>
        <Text>
          Olá usuário, caso você queira saber o que cada categoria das atividades
          complementares significa, por favor acesse a página de dúvidas do HoCo
        </Text>

        <Form>
          <Item>
            <UploadFile />
          </Item>
          <Row>
            <Col span={24}>
              <Item label="Título da atividade complementar">
                <Input
                  placeholder="Ex.: Monitoria em Laboratório de Programação II"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col className="gutter-row" span={12}>
              <Item label="Horas">
                <Input
                  type="number"
                  onChange={(e) => setHours(e.target.value)}
                  placeholder="Ex.: 20"
                />
              </Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Item label="Créditos">
                <Input
                  type="number"
                  onChange={(e) => setCredits(e.target.value)}
                  placeholder="Ex.: 8"
                />
              </Item>
            </Col>
          </Row>

          <Col span={24}>
            <Item label="Categoria">
              <Select options={filteredCategories} />
            </Item>
          </Col>

          <Button onClick={handleSubmit}>Finalizar cadastro</Button>
        </Form>
      </Wrapper>
    </OutWrapper>
  )
}
