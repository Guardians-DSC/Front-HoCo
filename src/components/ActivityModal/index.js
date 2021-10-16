/* eslint-disable react/prop-types */
import { CloseOutlined, FileTextOutlined, InboxOutlined } from '@ant-design/icons'
import React from 'react'
import { useTheme } from 'styled-components'
import { Text, Title, Item, Input, Button } from '../../styles/base-styles'
import {
  OutWrapper,
  Wrapper,
  Header,
  UploadFile,
  SameLineInfoWrapper,
  Form,
} from './style'

export const ActivityModal = ({ setIsActive }) => {
  const theme = useTheme()

  return (
    <OutWrapper>
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
          <UploadFile>
            <InboxOutlined style={{ fontSize: '48px', color: theme['main-font'] }} />
            <p>Fazer upload do certificado</p>
          </UploadFile>
          <Item label="Título da atividade complementar">
            <Input placeholder="Ex.: Monitoria em Laboratório de Programação II" />
          </Item>
          <SameLineInfoWrapper>
            <Item label="Categoria">
              <Input placeholder="Ex.: Monitoria em Laboratório de Programação II" />
            </Item>
            <Item label="Horas">
              <Input placeholder="Ex.: 20" />
            </Item>
            <Item label="Créditos">
              <Input placeholder="Ex.: 8" />
            </Item>
          </SameLineInfoWrapper>
          <Button>Finalizar cadastro</Button>
        </Form>
      </Wrapper>
    </OutWrapper>
  )
}
