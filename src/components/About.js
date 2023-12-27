import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
    const navigate = useNavigate();
    
    const clickHandler = () => {
        navigate("/labs");
    }
  return (
    <div>
     <div>
       <h1>rendered About</h1>
     </div>
     <button onClick={clickHandler}>Move to Labs Page</button>
    </div>
  )
}

export default About