import React, { useEffect, useState } from 'react';
import "./style.css";
import useResizable from '../../useResizable';
import sprite from "../../assets/sprite.svg"

const Header = () => {
    const { width } = useResizable();
    const [topbarName,setTopbar] = useState("topbar-desktop");
    const [logoDimensions,setLogoDimensions] = useState({
        width:221,
        height: 56
    });
    const [menuOpen,setMenuOpen] = useState(false)

    useEffect(()=>{
       if(width >= 1025){
        setTopbar("topbar-desktop"); 
        setLogoDimensions({width:221,height:56})
       } 
       else if(width>=480 && width<=1025)
       {
        setTopbar("topbar-tablet") 
        setLogoDimensions({width:129,height:37})
    }
        else{
            setTopbar("topbar-tablet")
            setLogoDimensions({width:226,height:56})
        }
    },[width])

    useEffect(()=>{
     menuOpen ? document.body.style.overflowY = 'hidden': document.body.style.overflowY = 'scroll';
    },[menuOpen])

  return (
    <div className='header'>
    <div className='top-bar'>
    <svg height={10} width={width}>
      <use href={`${sprite}#${topbarName}`} />
    </svg>
    </div>

    <div className={menuOpen?'navbar open':'navbar'}>
        <div className='logo cursor-pointer'>
        <svg height={logoDimensions.height} width={logoDimensions.width}>
       <use href={`${sprite}#logo`} />
     </svg>
        </div>
        <div className='right-menu'>
        <ul className='navigation'>
            <li>THIS MONTH</li>
            <li>SKIN</li>
            <li>HAIR</li>
            <li>BATH</li>
            <li>SALE</li>
            <li className='login-button cursor-pointer button'>
                LOG IN <span> &#62;</span>
            </li>
            
        </ul>
        <ul className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen?
            <svg height={33} width={33}>
            <use href={`${sprite}#hamburger-close`} />
            </svg>
            :<svg height={30} width={41}>
            <use href={`${sprite}#hamburger`} />
            </svg>
}
           
            </ul>
          
        </div>
    </div>
    <div className={menuOpen?'menu open':'menu'}>
            {menuOpen &&
           <>
           <div>THIS MONTH</div>
            <div>SKIN</div>
            <div>HAIR</div>
            <div>BATH</div>
            <div>SALE</div>
            <div>LOG IN</div>
            </>}
            </div>
    </div>
  )
}

export default Header
