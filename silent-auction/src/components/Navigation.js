import React from 'react'



export const Navigation = (props) => {
    // The navigation bar / menu

    return(
    <nav className = "navbar">
        <ul className = "navbar-nav">{props.children}</ul>
    </nav>
    )
}

//Create a Navigation Item 
//Later Move Navigation Item into it's own Component
export const NavItem = (props) => {
    return(
        <li className = "nav-item">
            <a href = "/#" className = "icon-button">
                {props.icon}
            </a>
        </li>
    )
}

