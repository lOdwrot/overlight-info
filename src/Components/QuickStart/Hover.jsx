import React, { useState } from 'react'
import {Input, Button, Form, Menu, Dropdown} from 'antd'
import styles from './QuickStart.module.scss'

const { SubMenu } = Menu
const FormItem = Form.Item

export default ({setStepStatus}) => {
    return (
        <>
            <div className={styles['section-comment']}>
                Overlight uses only visible page elements. Before item hidden by hover class will be clicked, just use Mouse Over command.
                <span style={{color: 'red'}}> Make sure page is not zoomed when executing this command (ctrl + 0) and element need is in visible part of page. Moving real mouse on page during execution this command can perturb execution.</span>
            </div>
            <FormItem help={'Click Item In Menu'}>
                <Dropdown overlay={contextMenu1(setStepStatus)}>
                    <Button>
                        Menu
                    </Button>
                </Dropdown>    
            </FormItem>
        </>
    )
}

const contextMenu1 = (setStepStatus) => (
    <Menu>
        <SubMenu title="sub menu">
            <SubMenu title="sub menu 2">
                <Menu.Item onClick={() => setStepStatus(true)}>Item To Click</Menu.Item>
            </SubMenu>
        </SubMenu>
        <Menu.Item>Seacrh Deeper</Menu.Item>
    </Menu>
)