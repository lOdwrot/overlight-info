import React, { useState } from 'react'
import { Button, Icon } from 'antd'
import styles from './QuickStart.module.scss'
import classnames from 'classnames'


export default () => {
    const [isLockerVisible, setLockerVisible] = useState(false)

    const showSpinner = () => setLockerVisible(true)
    const hideSpinner = () => setLockerVisible(false)

    return (
        <>
            <div className={classnames(styles['section-comment'])}>
                We can Ignore lockers, when we know that in this point of our system it is not related to test scenario.
            </div>
            <div>
                <div style={{width: '100px', height: '50px', padding: '10px', textAlign: 'center'}}>
                    {isLockerVisible && <Icon type="loading" style={{fontSize: '25px', color: 'rgb(42,167,255)'}}/>}
                </div>
                <div>
                    {
                        isLockerVisible &&
                        <Button onClick={hideSpinner}>
                            Hide Spinner
                        </Button>
                    }
                    {
                        !isLockerVisible &&
                        <Button onClick={showSpinner}>
                            Show Spinner
                        </Button>
                    }
                </div>
            </div>
        </>
    )
}