import React, { useState } from 'react'
import {Button} from 'antd'
import styles from './QuickStart.module.scss'

export default ({setStepStatus}) => {
    const [isAlertDone, setAlertDone] = useState(false)
    const [confirmState, setConfirmState] = useState(false)

    const showAlertClick = () => {
        window.alert('Alert Box')
        setAlertDone(true)
    }

    const showConfirmClick = () => {
        setConfirmState(JSON.stringify(window.confirm('Confirm Box')))
        setStepStatus(true)
    }

    return (
        <>
            <div className={styles['section-comment']}>
                To handle box behaviour (confirm/alert) you need to use "Box Behaviour" command before box will appear on page. Command will handle next box of given type instead of showing it.
            </div>
            <div className={styles['centered-inline']}>
                <Button style={{marginRight: '5px'}} onClick={() => showAlertClick()}>Show Alert</Button>
                {isAlertDone && 'Alert closed'}
            </div>
            <div className={styles['centered-inline']}>
                <Button style={{marginRight: '5px'}} onClick={() => showConfirmClick()}>Show Confirm</Button>
                {confirmState && `Confirm closed with state: ${confirmState}`}
            </div>
        </>
    )
}