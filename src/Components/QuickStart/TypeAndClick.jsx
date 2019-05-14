import React, { useState } from 'react'
import {Input, Button, Form} from 'antd'
import styles from './QuickStart.module.scss'

const FormItem = Form.Item
const correctText = 'Overlight is Awesome'

export default ({setStepStatus}) => {
    const [text, setText] = useState('')

    const check = () => setStepStatus(text === correctText)

    return (
        <>
            <div className={styles['section-comment']}>
                {`Just Type "${correctText}" to input below and click button.`}
            </div>
            <FormItem help={'Awesome Input'}>
                <div style={{display: 'flex'}}>
                    <Input
                        style={{width: '150px'}}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Awesome Input"
                    />
                    <Button onClick={check}>
                        Check Awesome Input
                    </Button>
                </div>
            </FormItem>
        </>
    )
}