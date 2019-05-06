import React, { useState } from 'react'
import { Steps, Button, Icon, Affix } from 'antd'
import styles from './QuickStart.module.scss'
import classnames from 'classnames'

const Step = Steps.Step

const steps = [
    'Type And Click',
    'Mouse Over / Focus / Hover',
    'Drag And Drop',
    'Execute Another Scenario',
    'Lockers'
]

export default () => {
    return (
        <div className={classnames(styles['left-panel'], styles['form'])} style={{margin: 0, width: '200px', marginRight: '20px'}}>
            <Steps direction="vertical" size="small" current={0}>
                {steps.map((v, index) => <Step 
                        key={v} 
                        title={v} 
                    />)}
            </Steps>
        </div>
    )
}