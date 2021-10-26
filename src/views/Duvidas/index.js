import React from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Question } from '../../components/Question'
import { Content, Title, Text } from '../../styles/base-styles.js'
import { data } from './Data'

export const Duvidas = () => {
  return (
    <Content>
      <Title>
        <QuestionCircleOutlined />
        {`Dúvidas`}
      </Title>
      <Text>
        {`Olá queride! Você tem alguma dúvida de como conseguir horas complementares e quais atividades 
      extra-curriculares podem ser consideradas como atividade complementares?
      Esperamos que essa seção do site lhe ajude a tirar algumas dúvidas.`}
      </Text>
      {data.map((item, index) => (
        <Question item={item} key={index} />
      ))}
    </Content>
  )
}
