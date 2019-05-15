import React, { useState } from 'react'
import styles from './QuickStart.module.scss'

export default ({setStepStatus}) => {
    const [frameWithText, setFrameWithText] = useState(0)

    return (
        <>
            <div className={styles['section-comment']}>
                Drag text between frames.
            </div>
            <div style={{display: 'flex'}}>
                {
                    [0, 1].map(v => (
                        <div
                            onDrop={e => {
                                setFrameWithText(v)
                                setStepStatus(v === 1)
                            }}
                            onDragOver={e => e.preventDefault()} 
                            className={styles['drop-target']} 
                            key={v}>
                            {
                                frameWithText === v &&
                                <div draggable={true} id='dragobj'>Drag Me!</div>
                            }
                        </div>
                    ))
                }
            </div>
        </>
    )
}