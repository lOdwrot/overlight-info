import React from 'react'
import { Divider, Input, Carousel } from 'antd'
import directPathImg from '../../Resources/Images/directPath.png'
import elementLinkImg from '../../Resources/Images/elementLink.png'
import uniquePropertyImg from '../../Resources/Images/uniqueProperty.png'

const introduction = `During creation of UI test automatomation one of the basic problem is creaion of references to DOM Elements - we want to click on selected button, type text to selected input field. Instead analysing page structure and writing complicated selectors overlight let you create reference to web elements using simple point and click mechanism to create: Direct Patch, find element By Unique Properties or create Elemnts Link. Concious mechanism selection help you create maintanance-free scenarios even when page layouts will change.
During creation of description to page elements Overlight use Filtered DOM structure - custom mechanism that ignores junkions or hidden elements.`

const directPath = `Direct path is just path between doucment body and selected element. It is used by scenario recorder, but any change on page can make it stop working. To build this king of description use recorder or select "Direct Path" and click on interested elment on page.`

const uniqueProperty = `Unique property let you select select properties (id, class, innerText etc.) to find interesting element on page. Every property can be matched to plain text or variable. Only properties with deterministic value should be selected. Values that suppose to be random (id in lightining, render time) usually wii be different evry time page will be loaded and will not be usefull to find proper web element.`

const elememntsLink = `Elements link is usefull to find element based on another element, when relative road between of them remains the same (Input and Label). Anchor Element is described exactly as in Unique Property method. Then select target element and overlight will build link between two of them. Link will be works as long as road between anchor and target remain the same, even after layout change.`

const sections = [
    {
        name: 'Direct Path',
        description: directPath,
        img: directPathImg
    },
    {
        name: 'Unique Property',
        description: uniqueProperty,
        img: uniquePropertyImg
    },
    {
        name: 'Elements Link',
        description: elememntsLink,
        img: elementLinkImg
    },
]

export default () => {
    return (
        <div className='frame-item-container'>
            <div className='frame-item'>
                <div className='frame-content-text'>
                    {introduction}
                </div>
                {
                    sections.map((v, index) => (
                        <div key={index}>
                            <Divider orientation="left">{v.name}</Divider>
                            <div className='frame-content-text'>
                                <div 
                                    className='image-documentation-container'
                                    style={{backgroundImage: `url(${v.img})`}}
                                />
                                {v.description}
                            </div>
                        </div>
                    ))
                }
                <Divider orientation="left">XPath</Divider>
                <div className='frame-content-text'>
                   {"You can use standard XPath selectors to find element on page. You can define it as plain text or use tokens $v{VARIABLE_NAME} that will be replaced by proper variable during execution. XPath should be used only in unlikely cases to build reference to element inside of a page structure. Use it only when neither Unique Property neither Element Link is sufficient to match your requirements."}
                </div>
                <Divider orientation="left">IFrame Path</Divider>
                <div className='frame-content-text'>
                    After description to element was created you need to set proper IFrame path. You can do this in command creator window by pressing warning icon button. Anchor and target elements for Elements Link need to be in the same frame (root window or same iframe).
                </div>
            </div>
        </div>
    )
}