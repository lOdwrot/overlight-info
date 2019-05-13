import React from 'react'
import { Divider } from 'antd'
import TypeAndClick from './TypeAndClick';
import Hover from './Hover';
import DragAndDrop from './DragAndDrop';
import ExecuteAnother from './ExecuteAnother';
import Lockers from './Lockers';
import ProgresSteper from './ProgresSteper';
import InfinityLocker from './InfinityLocker';
import BoxBehaviour from './BoxBehaviour';
import VariablesProcessing from './VariablesProcessing';
import styles from './QuickStart.module.scss'
import classnames from 'classnames'
import AssertEquals from './AssertEquals';


const introduction = `This page was created as sandbox and is great entry point to start with Overilght.`
export const sections = [
    {name: 'Type And Click', component: <TypeAndClick/>},
    {name: 'Mouse Over / Focus / Hover', component: <Hover/>},
    {name: 'Drag And Drop', component: <DragAndDrop/>},
    {name: 'Execute Another Scenario', component: <ExecuteAnother/>},
    {name: 'Lockers', component: <Lockers/>},
    {name: 'Infinity Locker', component: <InfinityLocker/>},
    {name: 'Box Behaviour', component: <BoxBehaviour/>},
    {name: 'Variable Processing', component: <VariablesProcessing/>},
    {name: 'Assert Equals', component: <AssertEquals/>},
]


export default () => {
    return (
        <div>
            <ProgresSteper/>
            <div className={classnames('frame-item-container', styles['main-frame'])} >
                <div className='frame-item'>
                    <div className='frame-content-text'>
                        {introduction}
                    </div>
                    <Divider orientation="left">Preparation</Divider>
                    <div className='frame-content-text'>
                        <div>1. Download overlight from google store (<a href='https://chrome.google.com/webstore/detail/overlight-test-automation/omngiidfgggcagkekmiiphinjmidppij'>here</a>)</div>
                        <div>2. Download scenario for pass throug Quick Start (<a>here</a>)</div>
                        <div>3. Import Scenario to Overlight (Button Import Scenarios on left sidebar)</div>
                        <div>4. Click Set Card and select tab where scenario will be executed</div>
                        <div>5. Play imported scenario or open and modifie it</div>
                    </div>
                    {
                        sections.map((v, index) => (
                            <div key={index}>
                                <Divider orientation="left">{v.name}</Divider>
                                <div className='frame-content-text'>
                                    {v.component}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}