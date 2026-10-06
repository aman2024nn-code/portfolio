import React from 'react'

const SkillCard = (props) => {
  return (
   
       <> <div className="skill-card">
          <i className={props.img}></i>
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
        </div></>
    
  )
}

export default SkillCard