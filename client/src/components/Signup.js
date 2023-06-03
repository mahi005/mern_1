import React, { useState } from 'react'
import { NavLink ,useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate ();
  const[user,setUser] = useState({ name:"",email:"",phone:"",work:"",password:"",cpassword:""})

    let name, value;
    const handleInputs =(e)=>{
      name= e.target.name;
       value=e.target.value;

       setUser({...user,[name]:value});
    }
 

    const PostData =async(e)=>{
        e.preventDefault();

        const{name, email, phone, work, password, cpassword}= user;

        const res = await fetch("/register" , {
          method:"POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body:JSON.stringify({ name, email, phone, work, password, cpassword})
        });

        const data = await res.json();
        if(res.status===(422) || !data){
          window.alert("invalid Registration");
          console.log("invalid Registration");
        }else{
          window.alert(" Registration Successful");
          console.log("valid Registration");

           navigate("/login");
        }
    }

  return (
    <div>
    <section>
    <div className="container mt-5">
       <div className="signup-content">
         <div className="signup-form">
         <h2 className='form-title'>Sign up</h2>
         <form method="POST" className='register-form' id='register-form'>

         <div className='form-group'>
         <label htmlFor='name'>
         <i class="zmdi zmdi-account"></i>
         </label>
         <input type="text" name="name" id="name " autoComplete='off'
          value={user.name} onChange={handleInputs}
           placeholder='Your Name'/>
         </div>
         
         <div className='form-group'>
         <label htmlFor='email'>
         <i class="zmdi zmdi-email"></i>
         </label>
         <input type="email" name="email" id="email " autoComplete='off' 
         value={user.email} onChange={handleInputs}
         placeholder='Your email'/>
         
         </div>

         <div className='form-group'>
         <label htmlFor='phone'>
         <i class="zmdi zmdi-phone"></i>
         </label>
         <input type="number" name="phone" id="phone " autoComplete='off'
         value={user.phone} onChange={handleInputs}
         placeholder='Your Phone no'/>
         
         </div>

         <div className='form-group'>
         <label htmlFor='work'>
         <i class="zmdi zmdi-slideshow"></i>
         </label>
         <input type="text" name="work" id="work " autoComplete='off' 
         value={user.work} onChange={handleInputs}
         placeholder='Your Profession'/>
         
         </div>

         <div className='form-group'>
         <label htmlFor='password'>
         <i class="zmdi zmdi-lock"></i>
         </label>
         <input type="password" name="password" id="password " autoComplete='off' 
         value={user.password} onChange={handleInputs}
         placeholder=' Your Password'/>
         </div>

         <div className='form-group'>
         <label htmlFor='cpassword'>
         <i class="zmdi zmdi-lock"></i>
         </label>
         <input type="password" name="cpassword" id="cpassword " autoComplete='off' 
         value={user.cpassword} onChange={handleInputs}
         placeholder=' Confirm Your Password'/>
         </div>

         <div className='form-group form-button'>
         <input type='sumbit' name='signup' id='signup' className='form-sumbit' value="register" onClick={PostData}/>
         </div>
         </form>
         </div>

         <div className='signup-image'>
          <figure>
          <img src='' alt=''/>
          <NavLink to='/login' className='signup-image-link'>I am already register</NavLink>
          </figure>
         </div>
        
       </div>
    </div>
    </section>
    </div>
  )
}

export default Signup