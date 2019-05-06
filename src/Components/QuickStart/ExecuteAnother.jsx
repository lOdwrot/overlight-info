import React, { useState } from 'react'
import {Input, Button, Form, Menu, Dropdown} from 'antd'
import styles from './QuickStart.module.scss'
import {shuffle} from 'lodash'
import classnames from 'classnames'

const { SubMenu } = Menu
const FormItem = Form.Item

export default () => {
    const [fields, setFields] = useState(['Name', 'Surname', 'Street', 'City'])
    const [values, setValues] = useState({})

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
                    <Button type="primary">Check Form</Button>
                </div>
            </div>
        </>
    )
}