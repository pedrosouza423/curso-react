import React from 'react'
import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do Ignite" />
        <strong>Ignite feed</strong>
    </header>
  )
}

export default Header