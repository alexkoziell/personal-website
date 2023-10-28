import * as React from 'react'
import { useState } from 'react'
import {
    accordion,
    accordionContent,
    accordionItem,
    accordionTitle,
    opened
} from './accordion.module.css'

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)
  
    const handleClick = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      <div className={accordionItem}>
        <div className={accordionTitle} onClick={handleClick}>
            <span>{title}</span><span>{isOpen ? '–' : '+'}</span>
        </div>
        <div className={accordionContent} style={{ display: isOpen ? 'block' : 'none' }}>
            {content}
        </div>
      </div>
    )
  }
  
const Accordion = ({ items }) => {
    return (
      <div className={accordion}>
        {items.map((item) => (
          <AccordionItem key={item.id} title={item.title} content={item.content}/>
        ))}
      </div>
    )
}
  
export default Accordion