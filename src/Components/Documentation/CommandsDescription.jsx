import React, { useState } from 'react';
import { Divider, Input } from 'antd';

const Search = Input.Search;

export default () => {
    const [searchPhrase, setSearchPhrase] = useState('')
    const search = searchPhrase.toLowerCase()

    return (
        <div className='frame-item-container'>
            <div className='frame-item'>
                <div className='frame-content-text'>
                    {
                        description.map((v, index) => <div key={index}>{v}</div>)
                    }
                </div>
                <Divider>Available Commands</Divider>
                <div className='frame-content-text'>
                    <Search
                        placeholder="Command..."
                        onChange={e => setSearchPhrase(e.target.value)}
                        value={searchPhrase}
                    />
                </div>
                <div>
                    {
                        commands
                            .filter(v => v.name.toLocaleLowerCase().includes(search))
                            .map((command, index) => (
                            <div key={index}>
                                <Divider orientation="left">{command.name}</Divider>
                                <div className='frame-content-text'>
                                    <p>{command.description}</p>
                                    <div>
                                        {
                                            command.args.map((arg, argIndex) => (
                                                <div key={argIndex}>
                                                    <span style={{fontWeight: '500'}}>{arg.name + ': '}</span>
                                                    {arg.description}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const description = [
    'Command is atomic part of test scenario created in Overlight Test Automation. Command can be executed on page site to simulate events or by directly by overlight.',
    'To add command to your scenario use command creator (click "Add Command" Button) or record sequence of commands by making actions on page. Recorded scenarios can be used as base for your test scenarios, but to create best scenarios yous should never used "Direct Paths" used by recorder.',
    'Every command executed on page have special parameter "Iframe Path" used to find proper Iframe on page. To set it just open command creator, make any action on iframe and then click on alert sign next to IFrame Path input.' 
]

const commands = [
    {
        name: 'Click',
        description: 'Command simulate standard click on any page element.',
        args: [
            {
                name: 'Target Element',
                description: 'Description of element on page that will be clicked.'
            },
            {
                name: 'Value (in Select TAG)',
                description: 'Used only for SELECT tag. Point select option that will be clicked. Option can be found by value or label.'
            }
        ]
    },
    {
        name: 'Click Right (Context Menu)',
        description: 'Command simulate context menu action (right click) on any page element.',
        args: [
            {
                name: 'Target Element',
                description: 'Description of element on page that will be clicked.'
            }
        ]
    },
    {
        name: 'Mouse Over',
        description: 'Command simulate mouse over event and appends all related with it actions (hover, focus etc.). During this command execution page need to have default zoom and target element need to be in visible part of page!',
        args: [
            {
                name: 'Target Element',
                description: 'Description of element on page for action.'
            }
        ]
    },
    {
        name: 'Scroll',
        description: 'Simulate scroll on page.',
        args: [
            {
                name: 'Scroll Direction',
                description: 'Direction of scrolling.'
            },
            {
                name: 'Scroll By (px)',
                description: 'Number of pixels to scroll.'
            },
        ]
    },
    {
        name: 'Set Break Between Commands',
        description: 'Set time before every action executed on page.',
        args: [
            {
                name: 'Break Time',
                description: 'Time in milliseconds to wait or "Settings Value" to restore standard time from settings.'
            },
        ]
    },
    {
        name: 'Set Wait Time After Locker Disappear',
        description: 'Set time after locker will be found and disappear before next command will be executed.',
        args: [
            {
                name: 'Break Time',
                description: 'Time in milliseconds to wait or "Settings Value" to restore standard time from settings.'
            },
        ]
    },
    {
        name: 'Box Behaviour (confirm, alert)',
        description: 'Command simulate action related to confirm/alert boxes. Need to be executed before box will be shown. Overlight will manage box and execute selected action instead of displaying it.',
        args: [
            {
                name: 'Box Type',
                description: 'Type of handled box.'
            },
            {
                name: 'Action',
                description: 'Action that will be simulated for confim box.'
            },
            {
                name: 'Variable Name',
                description: 'Name of variable that will store message from box.'
            }
        ]
    },
    {
        name: 'Reload Current Page',
        description: 'Just reload current page.',
        args: [
        ]
    },
    {
        name: 'Type In',
        description: 'Just reload current page.',
        args: [
            {
                name: 'Target Element',
                description: 'Place where text should be entered.'
            },
            {
                name: 'Value',
                description: 'Value of enetered text.'
            }
        ]
    },
    {
        name: 'Wait',
        description: 'Just wait before next command execution.',
        args: [
            {
                name: 'Time',
                description: 'Time in milliseconds before next command will be executed.'
            }
        ]
    },
    {
        name: 'Open URL',
        description: 'Change current page.',
        args: [
            {
                name: 'URL',
                description: 'URL of page to load.'
            }
        ]
    },
    {
        name: 'Drag And Drop',
        description: 'Simulate drag and drop of element.',
        args: [
            {
                name: 'Drag From',
                description: 'Description of draged element.'
            },
            {
                name: 'Drop Target',
                description: 'Landing element.'
            },
        ]
    },
    {
        name: 'Execute Another Scenario',
        description: 'Execute another saved scenario. Every scenario with parameters can be executed with default or custom parameters values.',
        args: [
            {
                name: 'Scenario',
                description: 'Scenario that will be executed.'
            }
        ]
    },
    {
        name: 'Set Variable From Page Property',
        description: 'Select any property (class, type, innerText) of any page element and save it as variable used later in the scenario execution.',
        args: [
            {
                name: 'Variable Name',
                description: 'Name of variable that will store selected property.'
            },
            {
                name: 'Page Element Property',
                description: 'Description of element that contains required property. Either description and "Target Property" need to be filled. Most common "Target Property" is innerText.'
            },
        ]
    },
    {
        name: 'Generate Variable',
        description: 'Generate variable used later in the scenario execution. You can set variable as plain text or generate it dynamically using JS syntax. In generation script you can use existing variable width syntax: $v{VariableName}. Created script should return String value.',
        args: [
            {
                name: 'Variable Name',
                description: 'Name of variable that will store generated variable.'
            },
            {
                name: 'Generation Method',
                description: 'Select whether variable should be set from plain string or by execution generation script.'
            },
        ]
    },
    {
        name: 'Assert Equals',
        description: 'Check whether two values are the same.',
        args: [
            {
                name: 'Expected Value',
                description: 'Expected Value of text or variable.'
            },
            {
                name: 'Actual Value',
                description: 'Actual Value of text or variable.'
            },
        ]
    },
    {
        name: 'Set Performance Point',
        description: 'Set timestamp used later in execution time analysis.',
        args: [
            {
                name: 'Performance Point Label',
                description: 'Name of performance point visible on performance chart.'
            },
        ]
    },
    {
        name: 'Set Lockers Disablement',
        description: 'Temporary turn off/on lockers. Lockers are enabled by default on start of every scenario execution.',
        args: [
            {
                name: 'Lockers State',
                description: 'Set wheter lockers should be enabled (on) or disabled ("off").'
            },
        ]
    },
]
