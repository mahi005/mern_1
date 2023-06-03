import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
    <section className='sign-in'>
    <div className="container mt-5">
       <div className="signin-content">

       <div className='signin-image'>
       <figure>
       <img src='' alt=''/>
       <NavLink to='/signup' className='signup-image-link'>Create an account</NavLink>
       </figure>
      </div>


         <div className="signin-form">
         <h2 className='form-title'>Sign In</h2>
         <form className='login-form' id='register-form'>

         
         
         <div className='form-group'>
         <label htmlFor='email'>
         <i class="zmdi zmdi-email"></i>
         </label>
         <input type="email" name="email" id="email " autoComplete='off' placeholder='Your email'/>
         
         </div>

       

         <div className='form-group'>
         <label htmlFor='password'>
         <i class="zmdi zmdi-lock"></i>
         </label>
         <input type="password" name="password" id="password " autoComplete='off' placeholder=' Your Password'/>
         </div>

        

         <div className='form-group form-button'>
         <input type='sumbit' name='signin' id='signin' className='form-sumbit' value="Log in"/>
         </div>
         </form>
         </div>

        
        
       </div>
    </div>
    </section>
    </div>
  )
}

export default Login