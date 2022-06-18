import React from 'react'
import styles from './Subdivisao.module.css'

const Subdivisao = (props) => {
  return (
    <div className={styles.subdivisao}  style={{background: props.preta ? 'black' : 'white'}}></div>
  )
}

export default Subdivisao