import React, { useState } from 'react'
import { Link } from 'react-router-dom'



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
    const [open, setOpen] = useState()

    return(
        <li className = "nav-item">
            <a href = "/#" 
                className = "icon-button" 
                onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}

//Create a function for the dropdown menu
export const DropdownMenu = () => {

    function DropdownItem(props){
        return(
        <a href ="/#" className = "menu-item">
        <span className = "icon-button">{props.leftIcon}</span>
            {props.children}
        <span className = "icon-right">{props.rightIcon}</span> 
        </a>
        )}

    return(
        <>
        <div className = "dropdown">
            <DropdownItem
                leftIcon = {"🔑"} >
                    <Link to='/login'>
                    Login
                    </Link>
            </DropdownItem>
            <DropdownItem 
                leftIcon={"📝" }>
                    <Link to='/register'>
                        Sign-up!
                        </Link>
            </DropdownItem>
            <DropdownItem 
                leftIcon={"📋"}><Link to='/protected/dashboard'>
                    Dashboard
                    </Link>
            </DropdownItem>
            <DropdownItem 
                leftIcon={"📋"}><Link to='/'>
                    Home
                    </Link>
            </DropdownItem>
        </div>
     </>
    )
}
 
