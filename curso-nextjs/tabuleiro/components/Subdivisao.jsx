import React from 'react'
import styles from './Subdivisao.module.css'

const Subdivisao = (props) => {
  return (
    <div 
        style={{
            background: props.preta ? "#000" : "#fff",
        }}
        className={styles.subdivisao}>

        </div>
  )
}

export default Subdivisao