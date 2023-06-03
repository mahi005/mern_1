import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div id='not found'>
      <div className="notfound">
         <h1>404</h1>
         <h2>We are sorry page not found!</h2>
         <NavLink to="/">Back to home page</NavLink>
      </div>
    </div>
  )
}

export default ErrorPage