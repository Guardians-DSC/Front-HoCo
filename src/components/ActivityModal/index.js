/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CloseOutlined, FileTextOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { Text, Title, Item, Input, Button } from '../../styles/base-styles'
import categories from '../../util/constants/categories'
import { Select } from '../Select'
import { UploadFile } from '../UploadFile'
import { OutWrapper, Wrapper, Header, Form } from './style'
import useActivitiesContext from '../../contexts/activities.context'
import { useAuth0 } from '@auth0/auth0-react'

export const ActivityModal = () => {
  const {
    currentActivityData,
    setCurrentActivityData,
    setUserActivities,
    submitActivity,
    closeActivityModal,
  } = useActivitiesContext()
  const [title, setTitle] = useState('')
  const [hours, setHours] = useState('')
  const [credits, setCredits] = useState('')
  const [certificate, setcertificate] = useState(null)
  const [category, setCategory] = useState('')
  const filteredCategories = Object.keys(categories).map((category, _) => {
    return categories[category].value
  })
  const [disabled, setDisabled] = useState(true)
  const { user } = useAuth0()
  const handleFileUpload = (files) => {
    const file = files[0]

    const fileObject = {
      file,
      titulo: file.name,
      previewURL: URL.createObjectURL(file),
    }

    setcertificate(fileObject)
  }

  const handleSubmit = async () => {
    const operation = !currentActivityData ? 'create' : 'update'
    let finalData = {}
    if (operation === 'create') {
      finalData = {
        title,
        file: certificate.file,
        category,
        'e-mail': user.email,
      }
    } else {
      finalData = {
        _id: currentActivityData._id,
        title: title,
        category: category,
        'e-mail': user.email,
      }

      if (certificate !== null) {
        finalData.certificate = certificate.file
      }
    }

    if (credits !== '' && credits !== null) finalData.credits = credits
    if (hours !== '' && hours !== null) finalData.time = hours

    const newData = await submitActivity(finalData, operation)
    await setUserActivities(newData)
    await setCurrentActivityData(null)
  }

  useEffect(() => {
    setDisabled(
      title === '' ||
        (certificate && certificate === null) ||
        category === '' ||
        (hours === '' && credits === '')
    )
  }, [title, credits, certificate, category, hours])

  useEffect(() => {
    if (currentActivityData && Object.keys(currentActivityData).length > 0) {
      setTitle(currentActivityData.title)
      setCredits(currentActivityData.credits)
      setHours(currentActivityData.time)
      setCategory(currentActivityData.category)
    }
  }, [currentActivityData])

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
            <UploadFile handleUpload={handleFileUpload} uploadedFile={certificate} />
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
                  disabled={credits !== null && credits !== ''}
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
                  disabled={hours !== null && hours !== ''}
                  onChange={(e) => setCredits(e.target.value)}
                  placeholder="Ex.: 8"
                />
              </Item>
            </Col>
          </Row>

          <Button disabled={disabled} onClick={handleSubmit}>
            Finalizar cadastro
          </Button>
        </Form>
      </Wrapper>
    </OutWrapper>
  )
}

ActivityModal.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    credits: PropTypes.string,
    time: PropTypes.string,
    _id: PropTypes.string,
    title: PropTypes.string,
    imageURL: PropTypes.string,
  }),
}
