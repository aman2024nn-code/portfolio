import React from 'react'
import SkillCard from './skillcard'

const skills = () => {
  return (
    <>     <div class="skill" id="skill">
  <h1>Skills</h1>
    
  <div class="skill-carousel">
    <div class="skill-grid">
      <SkillCard img= 'fa-brands fa-html5' name='HTML' desc='Structure of the web'/>
      <SkillCard img= 'fa-brands fa-css3-alt' name='CSS' desc='Styling & layouts'/>
      <SkillCard img= 'fa-brands fa-js' name='javascript' desc='Interactive behavior'/>
      <SkillCard img= 'fa-brands fa-git-alt' name='Git and GitHub' desc='Version control'/>
      <SkillCard img= 'fa-brands fa-java' name='Java' desc='Backend & OOP'/>
      <SkillCard img= 'fa-brands fa-react' name='React js' desc='JS library'/>
      <SkillCard img= 'fa-brands fa-python' name='Python' desc='Scripting & logic'/>
      <SkillCard img= 'devicon-postgresql-plain colored' name='PostgreSQL' desc='Relational database<'/>
      {/* <SkillCard name='' desc=''/>
      <SkillCard name='' desc=''/> */}
  </div>
</div>
</div>
</>
  )
}

export default skills