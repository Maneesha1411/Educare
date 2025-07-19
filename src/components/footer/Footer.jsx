import React from 'react'
import '../footer/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p>© {new Date().getFullYear()} EduCare. All rights reserved. | Designed with ❤️ by Team EduCare</p>
      <ul>
        <li>Terms of service</li>
        <li>Privacy Policy</li>
        </ul>
    </div>
  )
}

export default Footer
