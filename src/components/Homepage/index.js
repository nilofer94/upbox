import React, { useState } from 'react';
import './style.css'
import sprite from "../../assets/sprite.svg"
import useResizable from '../../useResizable';


const Homepage = () => {

let {width} = useResizable();

return (
    <div className='home-page'>
      <div className='banner'>
       <div className='left-section'>
         <div className='title-text'>
         Look good without leaving your house.
         </div>
         <div className='inner-text'>
         Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.
         </div>
         <div className='signup-button cursor-pointer'>
         SIGN UP <span> &#62;</span>
         </div>
       </div>
       <div className='right-section'>
        <div className='box'>
       <svg width="60vw" height="480">
       <use href={`${sprite}#box`} />
     </svg>
     </div>
     <div className='box-art'>
     <svg width="276" height="398">
       <use href={`${sprite}#box-art`} />
     </svg>
     </div>
       </div>
      </div>
      <div className='main-page'>
      <div className='main-page-title'>
          <div>How it works ?</div>
          <div>
          <svg height="38" width="100%">
       <use href={`${sprite}#underline`} />
     </svg>
     </div>
      </div>
      <div className='section-1'>
        <div className='section-1-image'>
        <svg width="233" height="280">
       <use href={`${sprite}#work1`} />
     </svg>
            <div className='section-image-number'>
                1
          
        </div>
        
        </div>
        <div className='section-desc'>
            <div className='main-desc'>Setup your profile & preferences
                </div>
                <div className='sub-desc'>
                Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.
                </div>
        </div>
      </div>
      <div className='section-2'>
        {width>480 ?
        
        <div className='section-2-image'>
        <div className='section-image-number section-2-image-number'>
                2
        </div>
        
        <svg width="233" height="280" className='work-2'>
       <use href={`${sprite}#work2`} />
      </svg>

      <svg width="233" height="280" className='work-2-art'>
       <use href={`${sprite}#work2-art`} />
      </svg>

      
        </div>:
        <>
        <div  className='section-image-number section-2-image-number'>2</div>
        <svg width="233" height="280" className='work-2'>
       <use href={`${sprite}#work2`} />
      </svg>
       </>
        }
        <div className='section-desc'>
            <div className='main-desc'>Review your custom box
                </div>
                <div className='sub-desc'>
                Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.                </div>
        </div>
        
        
      </div>
      <div className='section-3'>
        <div className='section-3-image'>
            <div className='section-image-number section-3-image-number'>
                3
          
        </div>
    <svg width="233" height="280">
       <use href={`${sprite}#work3`} />
     </svg>
        
        </div>
        <div className='section-desc'>
            <div className='main-desc'>Try it on at home
                </div>
                <div className='sub-desc'>
                Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.                </div>
        </div>
      </div>


<div className='signup-button cursor-pointer'>
    TRY IT FOR YOURSELF <span> &#62;</span>
</div>
    </div>
    </div>
  )
}

export default Homepage
