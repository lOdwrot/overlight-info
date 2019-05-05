import React from 'react';
import { withRouter } from 'react-router-dom'
import logo from '../../Resources/Images/logo.png'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import classnames from 'classnames';
import'./Navigation.css'

const tabs = [
    {key: '/home', label: 'Home', },
    {key: '/documentation', label: 'Documentation', },
    {key: '/quickStart', label: 'Quick Start', },
    {key: '/contact', label: 'Contact', },
]

const Nav = ({location}) => {

    return (
        <div className={classnames('ol-header')}>
            <div style={{ borderBottom: '1px solid #e8e8e8', paddingTop: '5px', paddingLeft: '10px', paddingRight: '20px'}}>
                <img src={logo} alt='overlight logo'/>
            </div>
            <Menu
                style={{fontSize: 18, width: '100vw'}}
                selectedKeys={[location.pathname]}
                mode="horizontal"
            >
                {
                    tabs.map(v => (
                        <Menu.Item key={v.key}>
                            <Link to={v.key}>
                                {v.label}
                            </Link>
                        </Menu.Item>
                    ))
                }
            </Menu>
        
        </div>
    )
}

export default withRouter(Nav)