import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import {
  Section,
  QuestionContent,
  Rotate,
  RotateActive,
  QuestionTitle,
  ResponseContent,
  ResponseText,
  Dropdown,
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
      <div key={index}>
        <QuestionContent onClick={() => toggle(index)} key={index}>
          <span>
            {selected === index ? (
              <RotateActive>
                <Dropdown>
                  <DownOutlined />
                </Dropdown>
              </RotateActive>
            ) : (
              <Rotate>
                <Dropdown>
                  <DownOutlined />
                </Dropdown>
              </Rotate>
            )}
          </span>

          <QuestionTitle>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {item.question}
            </ReactMarkdown>
          </QuestionTitle>
        </QuestionContent>
        {selected === index ? (
          <ResponseContent>
            <ResponseText id="response">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {item.answer}
              </ReactMarkdown>
            </ResponseText>
          </ResponseContent>
        ) : null}
      </div>
    </Section>
  )
}

Question.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  item: PropTypes.string,
  index: PropTypes.string,
}
