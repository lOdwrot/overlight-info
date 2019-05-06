import React, { useState } from 'react';
import CommandsDescription from './CommandsDescription';
import { Menu } from 'antd';
import ElementsReferences from './ElementsReferences';

const tabs = [
    {key: 'Commands', component: <CommandsDescription/>},
    {key: 'Elements References', component: <ElementsReferences/>},
    // {key: 'Parameters And Variables', component: <CommandsDescription/>},
    // {key: 'Overlight Interface', component: <CommandsDescription/>},
]

export default () => {
    const [selectedKey, setSelectedKey] = useState('Commands')

    return (
        <div>
            <Menu
                onSelect={e => setSelectedKey(e.key)}
                style={{fontSize: 15, width: '100%', borderBottom: '1px solid #e8e8e8'}}
                selectedKeys={[selectedKey]}
                mode="horizontal"
            >
                {
                    tabs.map(v => (
                        <Menu.Item key={v.key}>
                            {v.key}
                        </Menu.Item>
                    ))
                }
            </Menu>
            {tabs.find(v => selectedKey === v.key).component}
            {/* <CommandsDescription/> */}
        </div>
    )
}