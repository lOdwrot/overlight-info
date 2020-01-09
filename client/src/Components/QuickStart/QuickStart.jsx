import React, { useState } from 'react'
import { Divider, Icon } from 'antd'
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

const introduction = `This page was created as sandbox and is great entry point to start with Overilght. There is also video tutorial available.`

export default () => {
    const [stepsStatus, setStepsStatus] = useState([...Array(8)].reduce((acc, v, index) => ({...acc, [index]: false}), {}))
    const setStepStatus = (stepNumb) => (value) => {
        const nextState = {...stepsStatus, [stepNumb]: value}
        console.log('nextSteps', nextState)
        setStepsStatus(nextState)
    }

    const sections = [
        {name: 'Type And Click', component: <TypeAndClick setStepStatus={setStepStatus(0)}/>},
        {name: 'Mouse Over / Focus / Hover', component: <Hover setStepStatus={setStepStatus(1)}/>},
        {name: 'Drag And Drop', component: <DragAndDrop setStepStatus={setStepStatus(2)}/>},
        {name: 'Execute Another Scenario', component: <ExecuteAnother setStepStatus={setStepStatus(3)}/>},
        {name: 'Lockers', component: <Lockers setStepStatus={setStepStatus(4)}/>},
        {name: 'Infinity Locker', component: <InfinityLocker setStepStatus={setStepStatus(5)}/>},
        {name: 'Box Behaviour', component: <BoxBehaviour setStepStatus={setStepStatus(6)}/>},
        {name: 'Variable Processing', component: <VariablesProcessing setStepStatus={setStepStatus(7)}/>},
        {name: 'Assert Equals', component: <AssertEquals/>},
    ]

    return (
        <>
            <div className={classnames('frame-item-container', 'show-small-screen')}>
                <div className='frame-item'>
                    <div className='frame-content-text'>
                        Quick Start Available only on bigger screen (min 800px width).
                    </div>
                </div>
            </div>
            <div className="hide-small-screeen">
                <ProgresSteper stepsStatus={stepsStatus}/>
                <div className={classnames('frame-item-container', styles['main-frame'])} >
                    <div className='frame-item'>
                        <div className='frame-content-text'>
                            <div>
                                {introduction}
                            </div>
                            <div>
                                <a href='https://www.youtube.com/watch?v=b1RwM-epNfw'>
                                    <span style={{color: '#0b5aa3'}}>
                                        <Icon type="youtube" style={{marginRight: '10px'}}/>
                                    </span>
                                    Video Tutorial
                                </a>
                            </div>
                        </div>
                        <Divider orientation="left">Preparation</Divider>
                        <div className='frame-content-text'>
                            <div>1. Download overlight from Chrome Web Store (<a href='https://chrome.google.com/webstore/detail/overlight-test-automation/omngiidfgggcagkekmiiphinjmidppij'>here</a>)</div>
                            <div>2. Download scenario that lead you throug Quick Start (<a href='https://drive.google.com/file/d/1JfB2vL0HyvLpxbF-cV8LhudVjKFb_fMQ/view?usp=sharing'>here</a>)</div>
                            <div>3. Import Scenario to Overlight (Button Import Scenarios on left sidebar)</div>
                            <div>4. Click Set Card and select tab where scenario will be executed (click any element on this page)</div>
                            <div>5. Play imported scenario (Quick Start) or open and modifie it</div>
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
        </>
    )
}