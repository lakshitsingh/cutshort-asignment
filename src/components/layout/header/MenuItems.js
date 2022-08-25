import React from 'react'

const MenuItems = (props) => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.heading}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {
                    props.menuItemsLinks.map((item, i) => {
                        return <li key={i}><a className="dropdown-item" href="#">{item}</a></li>
                    })
                }

            </ul>
        </li>
    )
}

export default MenuItems