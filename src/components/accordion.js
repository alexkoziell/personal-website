import * as React from 'react'
import { useEffect, useState } from 'react'
import {
    accordion,
    accordionContent,
    accordionItem,
    accordionTitle
} from './accordion.module.css'

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [visibleHeight, setVisibleHeight] = useState(0)

    useEffect(() => {
      const contentElement = document.querySelector(`.${accordionContent}`);
      if (contentElement) {
        setVisibleHeight(contentElement.scrollHeight);
      }
    }, []);
  
    const handleClick = () => {
      setIsOpen(!isOpen)
    }

    return (
      <div className={accordionItem}>
        <button className={accordionTitle} onClick={handleClick}>
            <span>{title}</span><span>{isOpen ? '–' : '+'}</span>
        </button>
        <div className={accordionContent} style={{
          height: isOpen ? visibleHeight : 0
          }}>
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