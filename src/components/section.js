import * as React from 'react'
import { section, sectionTitle } from './section.module.css'

const Section = ({ title, children }) => {
    return (
        <div className={section}>
            <div>
                <h1 className={sectionTitle}>
                    {title}
                </h1>
                {children}
            </div>
        </div>
    )
}

export default Section