/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CloseOutlined, FileTextOutlined, InboxOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { Text, Title, Item, Input, Button } from '../../styles/base-styles'
import categories from '../../util/constants/categories'
import { Select } from '../Select'
import {
  OutWrapper,
  Wrapper,
  Header,
  UploadFile,
  SameLineInfoWrapper,
  Form,
  Background,
} from './style'

export const ActivityModal = ({ setIsActive }) => {
  const theme = useTheme()
  const [hours, setHours] = useState('')
  const [credits, setCredits] = useState('')
  const [title, setTitle] = useState('')
  const [fileList, setFileList] = useState([])
  const filteredCategories = Object.keys(categories).map((category, index) => {
    return categories[category].text
  })

  console.log(filteredCategories)

  const onUpload = ({ fileList, newFileList }) => {
    console.log(newFileList)
    setFileList(newFileList)
  }

  const handleSubmit = () => {
    console.log(fileList)
    setIsActive(false)
  }

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        console.log(info.file, info.fileList, 'xuxu')
      } else if (status === 'error') {
        console.log(`${info.file.name} file upload failed.`)
      }
      console.log(info.file)
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
  }

  console.log(categories)

  return (
    <OutWrapper>
      <Background onClick={() => setIsActive(false)} />
      <Wrapper>
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
          <UploadFile {...uploadProps}>
            <InboxOutlined style={{ fontSize: '48px', color: theme['main-font'] }} />
            <p>Click para fazer upload do certificado</p>
          </UploadFile>
          <Item label="Título da atividade complementar">
            <Input
              placeholder="Ex.: Monitoria em Laboratório de Programação II"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Item>
          <SameLineInfoWrapper>
            <Item label="Categoria">
              <Select options={filteredCategories} />
            </Item>
            <Item label="Horas">
              <Input
                type="number"
                onChange={(e) => setHours(e.target.value)}
                placeholder="Ex.: 20"
              />
            </Item>
            <Item label="Créditos">
              <Input
                type="number"
                onChange={(e) => setCredits(e.target.value)}
                placeholder="Ex.: 8"
              />
            </Item>
          </SameLineInfoWrapper>
          <Button onClick={handleSubmit}>Finalizar cadastro</Button>
        </Form>
      </Wrapper>
    </OutWrapper>
  )
}
