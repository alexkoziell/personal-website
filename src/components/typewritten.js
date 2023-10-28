import * as React from 'react'
import { useEffect, useState } from 'react'
import { blinkingCursor } from './typewritten.module.css'

const random_normal = (mean, variance, skew) => {
    // Draw samples from a normal distribution

    // Box-Muller transform
    let u = 0, v = 0
    while(u === 0) u = Math.random() // Convert [0,1) to (0,1)
    while(v === 0) v = Math.random()
    let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
    
    // Transform from standard normal
    let x = mean + variance * z

    // Apply skew
    x = x + skew * Math.sign(z) * Math.pow(Math.abs(z), 1 / 3)

    return x
}

const Typewritten = ({ delay, children }) => {
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [finished, setFinished] = useState(false)
    
    useEffect(() => {
        let timeout;
        if (currentIndex <= children.length - 1) {
        let factor = random_normal(1, 2, -1)
        timeout = setTimeout(() => {
            setCurrentText(currentText + children[currentIndex])
            setCurrentIndex(currentIndex + 1)
        }, factor * delay)
        } else {
            setTimeout(() => setFinished(true), 5000)
        }
        return () => clearTimeout(timeout);
    }, [currentText, currentIndex, children, delay])
    return (
    <span className={finished ?'' : blinkingCursor}>
        {currentText}
    </span>
    )
}

export default Typewritten