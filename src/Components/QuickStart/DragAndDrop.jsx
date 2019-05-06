import React, { useState } from 'react'
import styles from './QuickStart.module.scss'

export default () => {
    const [frameWithText, setFrameWithText] = useState(0)

    return (
        <>
            <div className={styles['section-comment']}>
                Drag image between frames.
            </div>
            <div style={{display: 'flex'}}>
                {
                    [0, 1].map(v => (
                        <div
                            onDrop={e => setFrameWithText(v)}
                            onDragOver={e => e.preventDefault()} 
                            className={styles['drop-target']} 
                            key={v}>
                            {
                                frameWithText === v &&
                                <div draggable={true}>Drag Me!</div>
                            }
                        </div>
                    ))
                }
            </div>
        </>
    )
}