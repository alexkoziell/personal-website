import * as React from 'react'
import { section } from './section.module.css'

const Section = ({ darkmode, children }) => {
    return (
        <div className={section}>
            {children}
        </div>
    )
}

export default Section