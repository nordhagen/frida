import React, { Component } from 'react'
import Card from '../Card'
import DropWell from '../DropWell'
import styles from './styles.css'

class ProjectRow extends Component {
  render() {
    let cards = this.props.project.team.map((person, i) => {
      return (
        <DropWell
          key={i}
          superTitle={person.rank}
          type="person"
          title={person.type}
          info={person.utilization * 100 + '%'}
        >
        {(person.person) !== null &&
          <Card
            key={i}
            type="person"
            superTitle={person.type}
            title={person.person}
            info={person.utilization * 100 + '%'}
          />
        }
        </DropWell>
      )
    })

    // let cards = this.props.project.team
    //   .filter(person => person.person !== null)
    //   .map((person, i) => {
    //     return (
    //       <Card
    //         key={i}
    //         type="person"
    //         superTitle={person.type}
    //         title={person.person}
    //         info={person.utilization * 100 + '%'}
    //       />
    //     )
    //   })

    cards.unshift(
      <Card
        key={this.props.project.project}
        type="project"
        superTitle={this.props.project.client}
        title={this.props.project.project}
      />
    )

    return (
      <div className="project-row">
        {cards}
      </div>
    )
  }
}

export default ProjectRow
