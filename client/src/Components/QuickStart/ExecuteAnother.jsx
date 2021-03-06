import React, { useState } from 'react'
import {Input, Button, Form} from 'antd'
import styles from './QuickStart.module.scss'
import {shuffle} from 'lodash'
import classnames from 'classnames'

const FormItem = Form.Item

export default ({setStepStatus}) => {
    const [fields, setFields] = useState(['Name', 'Surname', 'Street', 'City'])
    const [values, setValues] = useState({})

    const checkForm = () => setStepStatus(
        fields.reduce((acc, v) => (acc && !! values[v]), true)
    )

    return (
        <>
            <div className={styles['section-comment']}>
                Scenarios can be divided to small, parametrized scenarios and used as a part of bigger scenarios. Here subscenario will be used to fill form. Note that same scenario works even when layout will change. 
            </div>
            <div className={classnames('frame-item', styles['form'])}>
                {
                    fields.map(v => (
                        <FormItem help={v} className={styles['form-input']} key={v}>
                            <Input
                                value={values[v] || ''}
                                placeholder={v}
                                onChange={(e) => setValues({...values, [v]: e.target.value})}
                            />
                        </FormItem>
                    ))
                }
                <div>
                    <Button onClick={() => {
                        setFields(shuffle(fields))
                        setValues({})
                    }}>
                        Clear And Shuffle
                    </Button>
                    <Button type="primary" onClick={checkForm}>Check Form</Button>
                </div>
            </div>
        </>
    )
}