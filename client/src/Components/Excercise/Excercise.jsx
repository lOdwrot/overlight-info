import React, { useState } from "react";
import { Button, Divider, Form, Input, Modal } from "antd";

const FormItem = Form.Item
const users = [
    {login: 'user@test.com', password: 'testPassword'},
    {login: 'user2@test.com', password: 'testPassword2'},
    {login: 'user3@test.com', password: 'testPassword3'},
    {login: 'user4@test.com', password: 'testPassword4'},
    {login: 'user5@test.com', password: 'testPassword5'}
]

export default () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    const resetForm = () => {
        setLogin('')
        setPassword('')
    }

    const submitForm = () => {
        if (users.find(v => v.login === login && v.password === password)) {
            Modal.success({
                title: 'Success',
                content: 'Submission status'
            })
        } else {
            Modal.error({
                title: 'Error',
                content: 'Submission status'
            }) 
        }
        resetForm()
    }
    return (
        <>
        <div className='frame-item-container'>
                <div className='frame-item'>
                    <div className='frame-content-text'>
                        Below you can find a simple mock of "login form". 
                        <div>1. Create a test that fufill input with correct data (below) and check whether modal have "Success" status (Save your scenario). Use hardcoded test vaules.</div>
                        <div>2. Create a test that fufill input with incorrect data and check whether modal have "Error Status" (Save your scenario)</div>
                        <div>3. Modifie scenario from excercise 1, to accept "login and password" as parameters.</div>
                        <div>4. Create a test that get "login and password" from page and use scenario from excercise 3.</div>
                        <div>5. Check whether for all entries in csv file "Success" modal is displaied.</div>
                    </div>
                    <Divider>Test Data</Divider>
                    <div className='frame-content-text' >
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <FormItem help={'Login Data'}>
                                {users[0].login}
                            </FormItem>
                            <FormItem help={'Password Data'}>
                                {users[0].password}
                            </FormItem>
                        </div>
                        <div>Csv data <a href='/testData.csv'>here</a> </div>
                    </div>
                    <Divider>Login Form</Divider>
                    <div className='frame-item'>
                        <div className='frame-content-text'>
                            <FormItem help={'Login'}>
                                <Input
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)} 
                                    placeholder="Email"
                                />
                            </FormItem>
                            <FormItem help={'Password'}>
                                <Input.Password
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    placeholder="Password"
                                />
                            </FormItem>
                            <Button.Group>
                                <Button
                                    onClick={resetForm}
                                >
                                    Reset
                                </Button>
                                <Button
                                    disabled={!login || !password}
                                    onClick={submitForm}
                                    type='primary'
                                >
                                    Submit
                                </Button>
                            </Button.Group>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
