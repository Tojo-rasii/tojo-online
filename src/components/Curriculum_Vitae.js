import React, { Component } from 'react'
import Navbar from '../pages/Navbar'
import Body_CurriculumVitae from '../pages/Body_CurriculumVitae'

export class Curriculum_Vitae extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body_CurriculumVitae />
      </div>
    )
  }
}

export default Curriculum_Vitae
