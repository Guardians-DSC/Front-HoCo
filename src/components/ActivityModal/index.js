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
import useActivitiesContext from '../../contexts/activities.context'

export const ActivityModal = ({ data }) => {
  const { closeActivityModal } = useActivitiesContext()
  const [hours, setHours] = useState(data ? data.horas : '')
  const [credits, setCredits] = useState(data ? data.creditos : '')
  const [title, setTitle] = useState(data ? data.titulo : '')
  const [uploadedFile, setUploadedFile] = useState(data ? data.certificado : null)
  const [category, setCategory] = useState(data ? data.categoria : '')
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

    setUploadedFile(fileObject)
  }

  const handleSubmit = () => {
    closeActivityModal()

    let response
    if (!data) {
      response = registerActivity({
        id: create_UUID(),
        titulo: title,
        creditos: credits,
        horas: hours,
        categoria: category,
        file: uploadedFile,
      })
    } else {
      response = editActivity(data.id, data)
    }

    console.log(response)
  }

  return (
    <OutWrapper onClick={closeActivityModal}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>
            <FileTextOutlined /> Cadastrar Atividade
          </Title>
          <CloseOutlined style={{ fontSize: '28px' }} onClick={closeActivityModal} />
        </Header>
        <Text>
          Olá usuário, caso você queira saber o que cada categoria das atividades
          complementares significa, por favor acesse a página de dúvidas do HoCo
        </Text>

        <Form>
          <Item>
            <UploadFile
              handleUpload={handleFileUpload}
              uploadedFile={uploadedFile}
            />
          </Item>
          <Row>
            <Col span={24}>
              <Item label="Título da atividade complementar">
                <Input
                  value={title}
                  placeholder="Ex.: Monitoria em Laboratório de Programação II"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Item label="Categoria">
                <Select
                  defaultOption={category}
                  options={filteredCategories}
                  onChange={setCategory}
                />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Item label="Horas">
                <Input
                  value={hours}
                  type="number"
                  onChange={(e) => setHours(e.target.value)}
                  placeholder="Ex.: 20"
                />
              </Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Item label="Créditos">
                <Input
                  value={credits}
                  type="number"
                  onChange={(e) => setCredits(e.target.value)}
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
