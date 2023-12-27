import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate();
  return (
    <div>
    <h1>rendered NotFound</h1>
   </div>
  )
}

export default NotFound