import React, { Component } from 'react';
import ProjItem from '../components/ProjItem';

export class Projects extends Component {
  render() {
    return (
      this.props.projs.map((proj) => (
        <ProjItem key={proj.id} proj={proj} />
      ))
    )
  }
}

export default Projects
