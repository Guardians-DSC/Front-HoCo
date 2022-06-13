/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CloseOutlined, FileTextOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { Text, Title, Item, Input, Button } from '../../styles/base-styles'
import categories from '../../util/constants/categories'
import { Select } from '../Select'
import { UploadFile } from '../UploadFile'
import { OutWrapper, Wrapper, Header, Form } from './style'
import { editActivity, registerActivity } from '../../services/api'
import { create_UUID } from '../../util/util'
import { useForm } from '../../hooks/useForm'

export const ActivityModal = ({ setIsActive, data }) => {
  const [{ formState }, { handleFormChange }] = useForm({
    horas: data?.horas || '',
    creditos: data?.creditos || '',
    titulo: data?.titulo || '',
    file: data?.certificado || '',
    categoria: data?.categoria || '',
  })

  const filteredCategories = Object.keys(categories).map((category, index) => {
    return categories[category].text
  })

  const handleFileUpload = (files) => {
    const file = files[0]

    const fileObject = {
      file,
      titulo: file.name,
      previewURL: URL.createObjectURL(file),
    }

    handleFormChange('uploadedFile')(fileObject)
  }

  const handleSubmit = () => {
    setIsActive(false)

    let response
    if (!data) {
      response = registerActivity({
        id: create_UUID(),
        ...formState,
      })
    } else {
      response = editActivity(data.id, data)
    }

    console.log(response)
  }

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
            <UploadFile
              handleUpload={handleFileUpload}
              uploadedFile={formState.file}
            />
          </Item>
          <Row>
            <Col span={24}>
              <Item label="Título da atividade complementar">
                <Input
                  value={formState.titulo}
                  placeholder="Ex.: Monitoria em Laboratório de Programação II"
                  onChange={handleFormChange('titulo')}
                />
              </Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Item label="Categoria">
                <Select
                  defaultOption={formState.categoria}
                  options={filteredCategories}
                  onChange={handleFormChange('categoria')}
                />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Item label="Horas">
                <Input
                  value={formState.horas}
                  type="number"
                  onChange={handleFormChange('horas')}
                  placeholder="Ex.: 20"
                />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Item label="Créditos">
                <Input
                  value={formState.creditos}
                  type="number"
                  onChange={handleFormChange('creditos')}
                  placeholder="Ex.: 8"
                />
              </Item>
            </Col>
          </Row>

          <Button onClick={handleSubmit}>Finalizar cadastro</Button>
        </Form>
      </Wrapper>
    </OutWrapper>
  )
}

ActivityModal.propTypes = {
  setIsActive: PropTypes.func.isRequired,
  data: PropTypes.shape({
    categoria: PropTypes.string,
    creditos: PropTypes.number,
    horas: PropTypes.number,
    id: PropTypes.number,
    titulo: PropTypes.string,
    imageURL: PropTypes.string,
    certificado: PropTypes.shape({
      titulo: PropTypes.string,
      previewURL: PropTypes.string,
    }),
  }),
}
