import React, { useState } from 'react'



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
                leftIcon = {"🔑"} >Login
            </DropdownItem>
            <DropdownItem 
                leftIcon={"📝" }>Sign-up!
            </DropdownItem>
        </div>
     </>
    )
}
 
