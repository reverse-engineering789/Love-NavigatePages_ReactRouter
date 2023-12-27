import React from 'react'
import { useNavigate } from 'react-router-dom'



const Support = () => {
    const navigate = useNavigate();

    const clickHandler = () => {
         navigate("/home");
    } 

    const backHandler = () => {
        navigate(-1);
    }
  return (
    <div>
       <div>
        <h1>rendered Support</h1>
       </div>
       <button onClick={clickHandler}>Move to about paged</button>
       <br />
       <button onClick={backHandler}>Go back</button>
    </div>
    
  )
}

export default Support