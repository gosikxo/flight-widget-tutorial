import React from 'react'
import { useState } from 'react'

export const TableLetter = ({ letter, index }) => {
    const [flip, setFlip] = useState(false)

    setTimeout(() => {
        setFlip(true)
    }, 100 * index)

    return (
        <div className={flip ? 'flip' : null}>
            {flip ? letter : null}
        </div>
    )
}
