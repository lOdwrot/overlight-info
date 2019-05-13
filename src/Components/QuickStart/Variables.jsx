import React, { useState } from 'react'
import {Button} from 'antd'
import styles from './QuickStart.module.scss'

export default () => {
    const [isAlertDone, setAlertDone] = useState(false)
    const [confirmState, setConfirmState] = useState(false)

    const showAlertClick = () => {
        window.alert('Alert Box')
        setAlertDone(true)
    }

    const showConfirmClick = () => {
        setConfirmState(JSON.stringify(window.confirm('Confirm Box')))
    }

    return (
        <>
            <div className={styles['section-comment']}>
                You can pick values from page to store them and use later in scenario. You can use Variable Generator to merge commands 
            </div>
            
        </>
    )
}