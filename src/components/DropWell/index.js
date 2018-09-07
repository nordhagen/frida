import React, { Component } from 'react'
import styles from './styles.css'

class DropWell extends Component {
  render() {
    return (
      <div className={`${styles.DropWell} ${styles['DropWell-' + this.props.type]}`}>
        <h2 className={styles.superTitle}>{this.props.superTitle}</h2>
        <h3 className={styles.title}>{this.props.title}</h3>
        <p className={styles.info}>{this.props.info}</p>
        {this.props.children}
      </div>
    )
  }
}

export default DropWell
