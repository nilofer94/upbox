import React from 'react';
import './style.css'
import sprite from "../../assets/sprite.svg"

const Footer = () => {
    let icons=['instagram','facebook','twitter']
  return (
    <div className='footer'>
    <div className='footer-logo cursor-pointer'>
        <svg height="38" width="132">
       <use href={`${sprite}#logo`} />
     </svg>
        </div>
      <div className='social-media-links'>
      {icons.map((icon)=>{
      return  (<svg height="40" width="40" className='cursor-pointer'>
       <use href={`${sprite}#${icon}`} />
     </svg> )
     })}
      </div>
    </div>
  )
}

export default Footer
