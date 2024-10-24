import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import emailjs from 'emailjs-com';  // Add EmailJS

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.send('service_h2r1vhp', 'template_2rnfnth', formData, 'uWqhXA2mWKxyN3UGa')
      .then((result) => {
        console.log('Email sent:', result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log('Error:', error.text);
        alert('Failed to send the email, please try again.');
      });

      setFormData({ from_name: '', from_email: '', message: '' });
      toggleForm(); 
  };
  

  return (
    <header className='header'>
      <div className='logo'>
        <NavLink to='/' className='link'>
          <p className='port' style={{ fontFamily: 'Yatra One' }}>Portfolio</p>
        </NavLink>
      </div>

      <nav className='nav-header'>
        <ul className='nav-list'>
          <li><NavLink to='/' className='link'>About</NavLink></li>
          <li><NavLink to='/projects' className='link'>Projects</NavLink></li>
          <li><NavLink to='/skills' className='link'>Skills</NavLink></li>
          <li><NavLink to='/resume' className='link'>Resume</NavLink></li>
        </ul>
      </nav>

      {/* Contact Us Button */}
      <div className='contact' onClick={toggleForm}>
        <p>Contact Us</p>
      </div>

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={toggleForm}>&times;</span>
            <form onSubmit={sendEmail}>
            <label>Name:</label>
              <input 
                type='text' 
                name='from_name' 
                value={formData.from_user} 
                onChange={handleInputChange} 
                required 
              />
              <label>Email:</label>
              <input 
                type='email' 
                name='from_email' 
                value={formData.from_email} 
                onChange={handleInputChange} 
                required 
              />
              <label>Message:</label>
              <textarea 
                name='message' 
                value={formData.message} 
                onChange={handleInputChange} 
                required 
              />
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
