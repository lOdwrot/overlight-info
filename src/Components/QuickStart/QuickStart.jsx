import React from 'react'
import { Divider } from 'antd'
import TypeAndClick from './TypeAndClick';
import Hover from './Hover';
import DragAndDrop from './DragAndDrop';
import ExecuteAnother from './ExecuteAnother';
import Lockers from './Lockers';
import ProgresSteper from './ProgresSteper';

const introduction = `This page was created as sandbox and is great entry point to start with Overilght. Just download, import and play scenario below.`
export const sections = [
    {name: 'Type And Click', component: <TypeAndClick/>},
    {name: 'Mouse Over / Focus / Hover', component: <Hover/>},
    {name: 'Drag And Drop', component: <DragAndDrop/>},
    {name: 'Execute Another Scenario', component: <ExecuteAnother/>},
    {name: 'Lockers', component: <Lockers/>},
]


export default () => {
    return (
        <div style={{display: 'flex'}}>
            <ProgresSteper/>
            <div className='frame-item-container' >
                <div className='frame-item'>
                    <div className='frame-content-text'>
                        {introduction}
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