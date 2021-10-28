import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import {
  Section,
  QuestionContent,
  Rotate,
  QuestionTitle,
  ResponseText,
  ResponseContent,
} from './style.js'

import ReactMarkdown from 'react-markdown'

import remarkGfm from 'remark-gfm'

export const Question = ({ item, index }) => {
  const [selected, setselected] = useState(false)
  const toggle = (index) => {
    if (selected === index) {
      return setselected(null)
    }
    setselected(index)
  }

  return (
    <Section>
      <QuestionContent onClick={() => toggle(index)} key={index}>
        <Rotate className={selected === index ? 'active' : ''}>
          <DownOutlined />
        </Rotate>
        <QuestionTitle>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.question}</ReactMarkdown>
        </QuestionTitle>
      </QuestionContent>
      {selected === index && (
        <ResponseContent>
          <ResponseText>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.answer}</ReactMarkdown>
          </ResponseText>
        </ResponseContent>
      )}
    </Section>
  )
}

Question.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
}
