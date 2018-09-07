import React, { Component } from 'react'
import styles from './styles.css'

class Card extends Component {

  currentOverEl: null

  handleDragStart = (e) => {
    console.log('start')
  }

  handleDragEnd = (e) => {
    console.log('end')
  }

  handleDrop = (e) => {
    console.log('drop')
  }
  
  handleDragOver = (e) => {
    if (e.target != this.currentOverEl) {
      if (this.currentOverEl) this.currentOverEl.style = ''
      this.currentOverEl = e.target
      e.target.style.borderColor = 'red'
    }
  }
  
  handleDragLeave = (e) => {
    console.log(e.target)
  }

  render() {

    let draggable = this.props.type === 'person'
    let RootEl
    let children = [
      <h2 key="0" className={styles.superTitle}>{this.props.superTitle}</h2>,
      <h3 key="1" className={styles.title}>{this.props.title}</h3>,
      <p key="2" className={styles.info}>{this.props.info}</p>
    ]

    if (draggable) {
      return (
        <div
          className={`${styles.card} ${styles['card-' + this.props.type]}`}
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd}
          onDrop={this.handleDrop}
          onDragOver={this.handleDragOver}
          onDragLeave={this.handleDragLeave}
          draggable="true"
        >
          {children}
        </div>
      )
    }
    else {
      return (
        <div
          className={`${styles.card} ${styles['card-' + this.props.type]}`}>
          {children}
        </div>
      )
    }

    return (
      <RootEl>
        
      </RootEl>
    )
  }
}

export default Card
