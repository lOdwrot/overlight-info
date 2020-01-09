import React from 'react';
import classnames from 'classnames'
import { Icon } from 'antd';

export default () => (
    <div className={classnames('frame-item-container')}>
        <div className='frame-item'>
            <div className='frame-content-text home-screen'>
                <p>
                    We are Poland company experienced in working with Salesforce enviroment. Our software is used by Salesforce Platinum Partner to make their products even better. <br/>
                    Do you have any questions? Do you want to get license or share your expirence about Overlight? Just contact us.
                </p>
                <div>
                    <span style={{color: '#0b5aa3'}}>
                        <Icon type="idcard" style={{marginRight: '10px'}}/>
                    </span>
                     Overlight Software Łukasz Odwrot
                </div>
                <div>
                    <span style={{color: '#0b5aa3'}}>
                        <Icon type="bank" style={{marginRight: '10px'}}/>
                    </span>
                     NIP: 9730910883
                </div>
                <div>
                    <span style={{color: '#0b5aa3'}}>
                        <Icon type="phone" style={{marginRight: '10px'}}/>
                    </span>
                     +48 725 495 338
                </div>
                <div>
                    <span style={{color: '#0b5aa3'}}>
                        <Icon type="mail" style={{marginRight: '10px'}}/>
                    </span>
                     overlight.automation@gmail.com
                </div>
                <div>
                    <a href='https://www.youtube.com/watch?v=b1RwM-epNfw'>
                        <span style={{color: '#0b5aa3'}}>
                            <Icon type="youtube" style={{marginRight: '10px'}}/>
                        </span>
                        YouToube Channel
                    </a>
                </div>
            </div>
        </div>
    </div>
)