import React, { useState } from 'react'
import {Input, Button, Form} from 'antd'
import styles from './QuickStart.module.scss'

const FormItem = Form.Item

export default () => {
    const [text, setText] = useState('')

    return (
        <>
            <div className={styles['section-comment']}>
                Just Type "Overlight is Awesome" to input below and click button.
            </div>
            <FormItem help={'Awesome Input'}>
                <div style={{display: 'flex'}}>
                    <Input
                        style={{width: '150px'}}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Awesome Input"
                    />
                    <Button>
                        Check Awesome Input
                    </Button>
                </div>
            </FormItem>
        </>
    )
}