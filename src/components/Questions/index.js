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
        <div className={style.accordionSection}>
            <button className={`${style.accordion} ${active ? `${style.active}` : ""}`} onClick={handleClick}>
                <p className={style.title}>{props.title}</p>
                <Dropdown className={style.rotate} size='1.5rem' id={style.dropdown} color="#514E4E" />
            </button>
            <div className={style.accordionContent}>
                <div ref={content} style={{ maxHeight: `${height}` }} className={style.accordionText}>{props.content}</div>
            </div>
        </div>

    )
}
