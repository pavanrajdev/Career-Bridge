import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='nav-section'>
        
        <Link to={'/'}><div>
          <img 
            className='logo' 
            src="/assets/CB.png" 
            alt="CBlogo"
          />
        </div>
        </Link>

        <div className='nav-pages'>
          <Link to={'/'}>
          <div>Home</div>
          </Link>
          <Link to={'/all'}>
            <div>Job</div>
          </Link>
        
        <Link to={'/topcompany'}>
        <div>Companies</div>
        </Link>
          
          <Link to={'/about'}>
           <div>About</div>
          </Link>
         
         <Link to={'/contact'}>
         <div>Contact</div>
         </Link>
          
        </div>

        <div className='profile'>
          <div>
            <button className='login'>Login</button>
          </div>
          <div>
            <button className='register'>Register</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar