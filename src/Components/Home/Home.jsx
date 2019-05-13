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
                    Overlight is UI test automation tool dedicated for Salesforce Lightning and Visualforce. No matter whether your system uses only standard Salesforce features, custom Lightning Components, Lightning Web Components or React with Lightning Container Components, you can test everything in one simple way. There is also no obstacle to using Overlight outside Salesforcem for testing  any web application.
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
        content: 'Overlight is totally code free. Every step is created with intuitive creators and all steps are visible on clear list together with command parameters.',
        icon: 'profile'
    },
    {
        header: 'Configuration Free',
        content: 'All you need to do to start is installation of chrome extension.',
        icon: 'api'
    },
    {
        header: 'Instant Command Execution',
        content: 'You do not need to lunch whole scenario and wait 100 steps before something will crash and repeat whole process again and again. Which overlight you can create command and instantly execute it to see that everything just works.',
        icon: 'rocket'
    },
    {
        header: 'Execute Scenarios Anywhere',
        content: 'You can execute scenarios on any cart, so one scenario can be launched on any organization without any changes.',
        icon: 'cloud'
    },
    {
        header: 'Intuitive Web Element Reference',
        content: 'With overlight you do not need dig into page structure to find web elements. Overlight understand page almost as we do. You can just click on element and select interesting properties or link two elements like Label and Input to create reference to any page element.',
        icon: 'compass'
    
    },
    {
        header: 'Resistant To Changes',
        content: 'Scenarios created with Element Links and Unique Properties are totally resistance to any changes on page. No matter whether fields on standard layout will be reordered or custom component change structure. As long as relative structure between elements will be preserved you do not need to change anything in your scenarios.',
        icon: 'safety'
    },
    {
        header: 'Filtered DOM',
        content: 'Overligh filters all junkions and irrelevant elements so you do not need to worry about hidden elements.',
        icon: 'funnel-plot'
    },
    {
        header: 'Lockers',
        content: 'Describe elements like spinner as locker and Overlight will await with action until locker disappear.',
        icon: 'lock'
    },
    {
        header: 'Parametrize And Reuse',
        content: 'Every scenario created with Overlight can be part of more advanced scenario. Every scenario can be parametrized so you can execute long scenario by adding only one command and changing selected properties like name of Account.',
        icon: 'gold'
    },
    {
        header: 'Semi Automation',
        content: 'In addition to standard full test automation Overlight is adjusted to support semi automation. Define scenario that will clicked through countless screens to prepare and adjust data required later to check new functionalities or lead you through processes in your system.',
        icon: 'coffee'
    },
    {
        header: 'Advanced Data Processing',
        content: 'No matter how many commands will be implemented there can be a specific case where you want to process data. As example retrieve postal code from text with full address, generate current Date, some random string as id or make advanced calculation based on data gathered from page to check whether system works exactly as expected. Overlight gives you command that lets you execute JavaScript command with access to all variables gathered from page. You can do everything with your data.',
        icon: 'calculator'
    },
]
