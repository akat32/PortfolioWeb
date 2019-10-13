import React, { useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import './style.scss'

const Menu = ['Home', 'Resume', 'Github', 'Blog', 'Portfolio']
export const HeaderNavigation: React.FC = () => {
    const [ match, setMatch ] = useState(window.location.pathname)
    function fontBold (url: String) {
        return ( '/'+url === match ) ? { fontWeight : 700 } : { fontWeight : 200 }
    }
    function backcolor() {
        return ( window.location.pathname === '/' ) ? "header back" : "header"
    }
    return (
        <div className = { backcolor() }>
            <div className = "logo userSelect">
                <a href = '/'>Park Tae Wook</a>
            </div>
            <div className = "flexDump"/>
            <ul className = "navigationMenu">         
                <li style = { fontBold('') }>
                    <a href = '/'>Home</a>
                </li>
                <li style = { fontBold('Resume') }>
                    <a>Resume</a>
                </li>
                <li style = { fontBold('Github') }>
                    <a href = 'https://github.com/akat32'>Github</a>
                </li>
                <li style = { fontBold('Blog')}>
                    <a href = 'https://blog.naver.com/akat32'>Blog</a>
                </li>
                <li style = { fontBold('Portfolio') }>
                    <a href = '/Portfolio'>Portfolio</a>
                </li>
            </ul>
        </div>
    )
}