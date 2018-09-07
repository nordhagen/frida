import React, { Component } from 'react'
import ProjectRow from '../components/ProjectRow'
import projects from '../data/projects.json'

class ProjectBoard extends Component {
  render() {
    let rows = projects.map(project => {
      return <ProjectRow key={project.id} project={project} />
    })
    return (
      <section className="project-board">
        {rows}
      </section>
    )
  }
}

export default ProjectBoard
