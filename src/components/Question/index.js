import React, { useState } from 'react'
import { IoChevronDownOutline as Dropdown } from 'react-icons/io5'
import PropTypes from 'prop-types'
import { Section, QuestionContent, Rotate, RotateActive, QuestionTitle, ResponseContent, ResponseText } from './style.js'
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
                    <>
                        <QuestionContent onClick={() => toggle(index)} key={index}>
                            <span>{clicked === index ? <RotateActive><Dropdown size={24} color="#514E4E" /></RotateActive> : <Rotate><Dropdown size={24} color="#514E4E" /></Rotate>}</span>
                            <QuestionTitle><ReactMarkdown remarkPlugins={[remarkGfm]}>{item.question}</ReactMarkdown></QuestionTitle>
                        </QuestionContent>
                        {clicked === index ? (
                            <ResponseContent>
                                <ResponseText id="response"><ReactMarkdown remarkPlugins={[remarkGfm]}>{item.answer}</ReactMarkdown></ResponseText>
                            </ResponseContent>
                        ) : null}
                    </>
                );
            })}

        </Section>

    )
}



Questions.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,

}
