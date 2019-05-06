import React, { useState } from 'react'
import {Input, Button, Form, Menu, Dropdown} from 'antd'
import styles from './QuickStart.module.scss'

const { SubMenu } = Menu
const FormItem = Form.Item

export default () => {
    return (
        <>
            <div className={styles['section-comment']}>
                Overlight uses only visible page elements. Before item hidden by hover class will be clicked, just use Mouse Over command.
            </div>
            <FormItem help={'Click Item In Menu'}>
                <Dropdown overlay={contextMenu1()}>
                    <Button>
                        Menu
                    </Button>
                </Dropdown>    
            </FormItem>
        </>
    )
}

const contextMenu1 = () => (
    <Menu>
        <SubMenu title="sub menu">
            <SubMenu title="sub menu 2">
                <Menu.Item>Item To Click</Menu.Item>
            </SubMenu>
        </SubMenu>
        <Menu.Item>Seacrh Deeper</Menu.Item>
    </Menu>
)