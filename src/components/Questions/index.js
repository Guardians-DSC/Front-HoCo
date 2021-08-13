import React, { useState, useCallback, useRef } from 'react'
import { IoChevronDownOutline as Dropdown } from 'react-icons/io5'
import style from './style.module.css'

export const Questions = (props) => {
    const [active, setActive] = useState(false)
    const [height, setHeight] = useState("0px")
    const content = useRef(null)

    const handleClick = useCallback(
        () => {
            setActive(!active)
            setHeight(active ? "0px" : `${content.current.scrollHeight}px`)
        },
    )
    return (
        <div className={style.section}>
            <div className={style.container}>
                <div className={`${style.questionContent} ${active ? `${style.active}` : ""}`} onClick={handleClick}>
                    <div className={style.icon}><Dropdown className={style.rotate} id={style.dropdown} color="#514E4E" /></div>
                    <p className={style.questionTitle}>{props.title}
                    </p>
                </div>
                <div className={style.responseContent}>
                    <div ref={content} style={{ maxHeight: `${height}` }} className={style.responseText}>{props.content}</div>
                </div>
            </div>
        </div>

    )
}
