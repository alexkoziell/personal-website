import * as React from 'react'
import { Link } from 'gatsby'

import {
    container,
    navItem,
    navLinks,
    navText
} from './layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navItem}>
                        <Link className={navText} to='/'>Home</Link>
                    </li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout