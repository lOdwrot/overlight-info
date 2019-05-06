import React, { useState } from 'react'
import { Steps, Button, Icon } from 'antd'
import styles from './QuickStart.module.scss'
import classnames from 'classnames'

const Step = Steps.Step

const steps = ['First', 'Second', 'Last']


export default () => {
    const [activeStep, setActiveStep] = useState(0)
    const [isLockerVisible, setLockerVisible] = useState(false)

    const reset = () => {
        setActiveStep(0)
        setLockerVisible(false)
    }

    const clickNext = () => {
        setLockerVisible(true)
        setTimeout(() => {
            setActiveStep(activeStep + 1)
            setLockerVisible(false)
        }, 1500)
    }

    return (
        <>
            <div className={classnames(styles['section-comment'])}>
                During testing app you need to wait for many things. Waiting for proper element to load is handled automatically. But during server call you need to wait untli action will finish what is symbolised by special element on page like "Spinner" or "Loading". You can define lockers that will always wait with command execution until locker elemnt is visible on page. 
            </div>
            <div className={classnames('frame-item', styles['form'])}>
                <Steps current={activeStep}>
                    {steps.map((v, index) => <Step 
                            key={v} 
                            title={v} 
                            icon={isLockerVisible && activeStep === index && <Icon type="loading" />}
                        />)}
                </Steps>
                <div style={{paddingTop: '25px'}}>
                    <Button onClick={reset}>
                        Reset
                    </Button>
                    <Button
                        onClick={clickNext}
                        disabled={activeStep === (steps.length - 1)}
                        type='primary'>
                        Next
                    </Button>
                </div>
            </div>
        </>
    )
}