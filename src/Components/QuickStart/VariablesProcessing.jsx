import React, { useState, useEffect } from 'react'
import {sample} from 'lodash'
import styles from './QuickStart.module.scss'
import {Input, Button, Form} from 'antd'
import classnames from 'classnames'

const FormItem = Form.Item
const names = ['Adam', 'John', 'Agnes', 'Alice', 'Frances', 'Mario']
const surnames = ['Smith', 'Murphy', 'Jones', 'Williams', 'Miller', 'Bros']

export default () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [userInput, setInput] = useState('')

    const resetNames = () => {
        setName(sample(names))
        setSurname(sample(surnames))
    }

    useEffect(() => {
        resetNames()
    }, [])

    return (
        <>
            <div className={styles['section-comment']}>
                You can pick data from page or use Variable Genertor to create new Variable. Generator support standard JS syntax and can use variables defined before. 
            </div>
            <div className={classnames('frame-item', styles['form'])}>
                <div>
                    <FormItem className={styles['form-input']} help={'Generated Name'}>
                        {name}
                    </FormItem>
                    <FormItem className={styles['form-input']} help={'Generated Surname'}>
                        {surname}
                    </FormItem>
                </div>
                <div style={{paddingTop: '15px'}}>
                    <Button onClick={resetNames}>
                        Generate Next User
                    </Button>
                
                    <FormItem help={'Set Data In Format "CURRENTYEAR_NAME_SURNAME"'} className={styles['form-input']} style={{paddingTop: '15px'}}>
                        <Input
                            value={userInput}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </FormItem>
                </div>
            </div>
        </>
    )
}