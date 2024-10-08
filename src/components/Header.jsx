import React from 'react'
// import Logo from "../assets/Logo.png"

const Header = () => {
  return (
    <div className='header'>
      <div>
        {/* <img src={Logo} alt="" width={250} height={200} style={{ marginTop:"-2rem"}}/> */}
        <p>Portfolio</p>
      </div>
      <div>
        <ul className='nav-header'>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Resume</li>
        </ul>
     </div>
     <p>Contact Us</p>
    </div>
  )
}

export default Header
