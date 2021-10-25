import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import { Section, QuestionContent, Rotate, RotateActive, QuestionTitle, ResponseContent, ResponseText, Dropdown } from './style.js'
import { data } from './Data.js'
import ReactMarkdown from 'react-markdown'

import remarkGfm from 'remark-gfm'

export const Questions = () => {

    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if (clicked === index) {
            console.log(index);
            return setClicked(null);
        }

        setClicked(index);
    }

    return (

        <Section>
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <QuestionContent onClick={() => toggle(index)} key={index}>
                            <span>{clicked === index ? <RotateActive><Dropdown><DownOutlined /></Dropdown></RotateActive> : <Rotate><Dropdown><DownOutlined /></Dropdown></Rotate>}</span>
                            <QuestionTitle><ReactMarkdown remarkPlugins={[remarkGfm]}>{item.question}</ReactMarkdown></QuestionTitle>
                        </QuestionContent>
                        {clicked === index ? (
                            <div>
                                <ResponseContent>
                                    <ResponseText id="response"><ReactMarkdown remarkPlugins={[remarkGfm]}>{item.answer}</ReactMarkdown></ResponseText>
                                </ResponseContent>
                            </div>
                        ) : null}
                    </div>
                );
            })}

        </Section>

    )
}

Questions.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,

}
