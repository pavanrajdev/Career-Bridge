import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='nav-section'>
        
        <Link to={'/home'}><div>
          <img 
            className='logo' 
            src="/assets/CB.png" 
            alt="CBlogo"
          />
        </div>
        </Link>

        <div className='nav-pages'>
          <Link to={'/home'}>
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
         <Link to={'/myapplications'}> <i className="fa-solid fa-suitcase" style={{ fontSize: "30px" }} title="Applied Jobs"></i></Link>
          <div>
            <Link to={'/profile'}><i class="fa-regular fa-circle-user" style={{ fontSize: "30px",marginLeft:'30px'}}></i></Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar