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
    'A command is an atomic part of a test scenario created in Overlight Test Automation. A command can be executed on a page side to simulate events or directly by Overlight.',
    'To add a command to your scenario use Command Creator (click "Add Command" Button) or record a sequence of commands by making actions on the page. Recorded scenarios can be used as a base for your test scenarios, but to create the best scenarios yous should never use "Direct Paths" utilized by the recorder.',
    'Every command executed on the page has a special parameter "Iframe Path" used to find proper Iframe on the page. To set it, just open the Command Creator, make any action on the Iframe and then click on the alert sign next to IFrame Path input.' 
]

const commands = [
    {
        name: 'Click',
        description: 'Simulate standard click on any page element.',
        args: [
            {
                name: 'Target Element',
                description: 'Description of element on a page that will be clicked.'
            },
            {
                name: 'Value (in Select TAG)',
                description: 'Used only for SELECT tag. Point select option that will be clicked. Option can be found by value or label.'
            }
        ]
    },
    {
        name: 'Click Right (Context Menu)',
        description: 'Simulate context menu action (right click) on any page element.',
        args: [
            {
                name: 'Target Element',
                description: 'Description of element on page that will be clicked.'
            }
        ]
    },
    {
        name: 'Double Click',
        description: 'Simulate double click on any page element.',
        args: [
            {
                name: 'Target Element',
                description: 'Description of element on page that will be clicked.'
            }
        ]
    },
    {
        name: 'Mouse Over',
        description: 'Simulate mouse over event and append all actions related to it (hover, focus etc.). During execution of this command page needs to have default zoom set and target element needs to be in visible part of the page!',
        args: [
            {
                name: 'Target Element',
                description: 'Description of element on which the action will be applied.'
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
                description: 'Number of pixels to scroll by.'
            },
        ]
    },
    {
        name: 'Set Break Between Commands',
        description: 'Set break time preceding any action execution on a page.',
        args: [
            {
                name: 'Break Time',
                description: 'Time in milliseconds to wait or "Settings Value" to restore standard time from Settings.'
            },
        ]
    },
    {
        name: 'Wait Until Element Appear',
        description: 'Wait with execution until an element with a given description will appear on a page. In case an element will be not available in time defined as max waiting time parameter, scenario will fail.',
        args: [
            {
                name: 'Target Element',
                description: 'Description of an element that need to be available on a page to continue execution.'
            },
            {
                name: 'Max Waiting Time',
                description: 'Time limit for element to appear on page.'
            },
        ]
    },
    {
        name: 'Wait Until Element Disappear',
        description: 'Wait with execution until an element with a given description will be not visible on a page. In case an element will be available in time defined as max waiting time parameter, scenario will fail.',
        args: [
            {
                name: 'Target Element',
                description: 'Description of an element that need to be not available on a page to continue execution.'
            },
            {
                name: 'Max Waiting Time',
                description: 'Time limit for element to appear on page.'
            },
        ]
    },
    {
        name: 'Set Wait Time After Locker Disappear',
        description: 'Set time after locker will be found and disappear before next command will be executed.',
        args: [
            {
                name: 'Break Time',
                description: 'Time in milliseconds to wait or "Settings Value" to restore standard time from Settings.'
            },
        ]
    },
    {
        name: 'Box Behaviour (confirm, alert)',
        description: 'Simulate action related to confirm/alert boxes. Need to be executed before box will be shown. Overlight will manage box and execute selected action instead of displaying it.',
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
        description: 'Type text to selected input.',
        args: [
            {
                name: 'Target Element',
                description: 'Place where text should be entered.'
            },
            {
                name: 'Value',
                description: 'Value of enetered text.'
            },
            {
                name: 'keyDown-keyUp events',
                description: 'Simulate every single key up and key down event (used for inputs that have listeners for any of this events)'
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
        name: 'Assert Not Equals',
        description: 'Check whether two values are different the same.',
        args: [
            {
                name: 'Not Expected Value',
                description: 'Value of text or variable that will be compared.'
            },
            {
                name: 'Actual Value',
                description: 'Actual Value of text or variable.'
            },
        ]
    },
    {
        name: 'Check Element Exist',
        description: 'Check whether element with given description is present on page.',
        args: [
            {
                name: 'Target Element',
                description: 'Description of an element to check.'
            },
        ]
    },
    {
        name: 'Check Element Not Exist',
        description: 'Check whether element with given description is not present on page.',
        args: [
            {
                name: 'Target Element',
                description: 'Description of an element to check.'
            },
        ]
    },
    {
        name: 'Comment',
        description: 'Text that appear as a step with a vital information. This command is ignored during execution process.',
        args: [
            {
                name: 'Comment',
                description: 'Content of a comment.'
            },
            {
                name: 'Color',
                description: 'Background color of a comment command.'
            },
        ]
    },
    {
        name: 'Open New Tab',
        description: 'Create a new tab in a browser and set context for it.',
        args: [
            {
                name: 'Page URL',
                description: 'URL of page that will be open in new tab.'
            }
        ]
    },
    {
        name: 'Switch Tab/Window',
        description: 'Changes context of window where scenario is executed.',
        args: [
            {
                name: 'Selection Method',
                description: 'Determines whether the context should be set for newest tab, oldest tab or it should be found by fragment of url address.'
            },
            {
                name: 'URL Fragment',
                description: 'Fragment of URL that will be used to find a page (for Containing URL selection method).'
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
    {
        name: 'Init Variables',
        description: 'This command should be used when your scenario will use data from CSV file in Overlight Headless. It let you initialize sequence of variables that will be used to create your test. This step will be ignored by Overlight Headless. Instead of it, use parameter --executedTests=TEST_NAME>INIT_DATA.csv. In a csv file first row defines names of variables. Scenario will be repeated for every row in a file and executed with different variable values initialized.',
        args: [
        ]
    },
].sort((a, b) => a.name > b.name ? 1 : -1)
