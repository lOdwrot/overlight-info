import React from 'react'
import { Divider, Icon } from 'antd';
import styles from './Home.module.scss'
import classnames from 'classnames'

export default () => (
    <div className={classnames('frame-item-container', styles['home-screen'])}>
        <div className='frame-item'>
            <div className='frame-content-text home-screen'>
                <h3>What Is Overlight?</h3>
                <p>
                    Overlight is UI test automation tool dedicated for Salesforce Lightning and Visualforce. No matter whether your system uses only standard Salesforce features, custom Lightning Components, Lightning Web Components or React with Lightning Container Components, you can test everything in one simple way. There is also no obstacle to using Overlight outside of Salesforcem for testing any web application.
                </p>    
                <h3>Features</h3>    
            </div>   
            <div className={styles['features-container']}>
                {
                    data.map((v, index) => (
                        <div key={index} className={'frame-item'}>
                            <div className='frame-content-text'>
                                <h2>
                                    <Icon type={v.icon} style={{marginRight: '20px'}}/>
                                    {v.header}
                                </h2>
                            </div>
                            <Divider/>
                            <div className='frame-content-text'>
                                <p>{v.content}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
)

const data = [
    {
        header: 'Code Free',
        content: 'Overlight is totally code free. Every step is created with intuitive controls and all steps are visible on clear list together with commands parameters.',
        icon: 'profile'
    },
    {
        header: 'Configuration Free',
        content: 'All you need to do to start is installation of Chrome extension.',
        icon: 'api'
    },
    {
        header: 'Instant Command Execution',
        content: 'You do not need to launch whole scenario and wait 100 steps before something will crash and repeat whole process again and again. With Overlight you can create a command and instantly execute it to see that everything just works.',
        icon: 'rocket'
    },
    {
        header: 'Execute Scenarios Anywhere',
        content: 'You can execute scenarios on any cart, so one scenario can be launched on any enviroment without any changes.',
        icon: 'cloud'
    },
    {
        header: 'Intuitive Web Element Reference',
        content: 'With Overlight you do not need to dig into the page structure to find web elements. Overlight understands the page almost as we do. You can just click on an element and select interesting properties or link two elements like Label and Input to create a reference to any page element.',
        icon: 'compass'
    
    },
    {
        header: 'Resistant To Changes',
        content: 'Scenarios created with Element Links and Unique Properties are totally resistant to any changes on the page. No matter whether fields on standard layout will be reordered or a custom component changes its structure. As long as relative structure between elements will be preserved you do not need to change anything in your scenarios.',
        icon: 'safety'
    },
    {
        header: 'Filtered DOM',
        content: 'Overlight filters all what is irrelevant so you do not need to worry about hidden elements.',
        icon: 'funnel-plot'
    },
    {
        header: 'Lockers',
        content: 'Describe elements like spinner as locker and Overlight will wait with action until locker disappears.',
        icon: 'lock'
    },
    {
        header: 'Parametrize And Reuse',
        content: 'Every scenario created with Overlight can be a part of a bigger scenario. Every scenario can be parametrized so you can execute long scenario by adding only one command and changing selected properties like name of Account.',
        icon: 'gold'
    },
    {
        header: 'Semi-Automation',
        content: 'In addition to standard full test automation Overlight is adjusted to support semi-automation. Define scenario that will click through countless screens to prepare and adjust data required later to check new functionalities or lead you through processes in your system.',
        icon: 'coffee'
    },
    {
        header: 'Advanced Data Processing',
        content: 'No matter how many commands will be implemented there can be a specific case where you want to process data. As an example: retrieve postal code from text with full address, generate current Date, some random string as id or make advanced calculation based on data gathered from page to check whether system works exactly as expected. Overlight gives you command that lets you execute JavaScript command with access to all variables gathered from page. You can process your data exactly as you want.',
        icon: 'calculator'
    },
]
