import React, { useState } from 'react'
import styles from './mouse.module.css'

const mouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const quandoMover = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

  return (
    <div className={styles.container} onMouseMove={quandoMover}>
        <div>Eixo X: {x}</div>
        <div>Eixo Y: {y}</div>
    </div>
  )
}

export default mouse