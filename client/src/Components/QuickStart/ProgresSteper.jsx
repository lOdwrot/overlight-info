import React, { useState, useEffect } from 'react'
import { Steps, Button, Icon, Affix, Divider } from 'antd'
import styles from './QuickStart.module.scss'
import classnames from 'classnames'

const Step = Steps.Step

const steps = [
    'Type And Click',
    'Mouse Over / Focus / Hover',
    'Drag And Drop',
    'Execute Another Scenario',
    'Lockers',
    'Infinity Locker',
    'Box Behaviour',
    'Variable Processing'
]

export default ({stepsStatus}) => {
    const [lastStep, setLastStep] = useState(0)

    const updateStep = () => {
        let currentStep = 0
        for (let val of Object.values(stepsStatus)) {
            if (!val) { break }
            currentStep++
        }
        setLastStep(currentStep)
    }

    useEffect(() => {
        updateStep()
    })

    const isFinished = steps.length === lastStep

    return (
        <div className={classnames(styles['left-panel'])} style={{margin: 0, width: '200px', marginRight: '20px'}}>
            <Steps direction="vertical" size="small" current={lastStep}>
                {steps.map((v, index) => <Step 
                        key={v} 
                        title={v} 
                    />)}
            </Steps>
            <Divider>Status</Divider>
            <div style={{
                width: '100%', 
                textAlign: 'center', 
                fontSize: '1.2em',
                fontWeight: '600',
                color: !isFinished ? '#FF8C00' : '#1890ff'
            }}>
                {!isFinished && 'Incomplited'}
                {isFinished && 'Completed'}
            </div>
        </div>
    )
}