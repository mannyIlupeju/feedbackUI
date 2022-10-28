//this page is unrelated with the project, just a learning period on using routes, navLinks, params and navigate.
//How to use Params 
//using Navigate and useNavigate for specific routing purposes
//Nested routes - how to nest routes 
import React from 'react'
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'


const Post = () => {

  const navigate = useNavigate()

  const onClick = () => {
    console.log('Hello')
    navigate('/about')
  }

  //error logic
  const status = 200;

  if (status === 404) {
    return <Navigate to= '/notfound' />
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>

      {/* setting up nested route for the innerlink - show */}
      <Routes>
         <Route path='/show' element={<h1>Hello World</h1>}/>
      </Routes>
    </div>
  )
}

export default Post
