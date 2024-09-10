import React, { useEffect } from 'react'
import './Description.css'
import DescText from './DescText'
import Features from '../Features'
import scrollreveal from 'scrollreveal'



function Description() {
  useEffect(()=>{
    scrollreveal().reveal('#tda', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'bottom',  // The direction from which the element will reveal
      reset: true,       // If true, animation repeats every time you scroll back
    });
  },[])


  return (
    <>
    <div className="margindiv">
    <div className='container1'>
    <p id='tda'>The <span style={{fontFamily:'sohne'}}> Spellbook </span>   </p>
    </div>
    <div className="descmain">
    <DescText/>
    </div>
    <hr />
    <Features/>
    </div>

    

    </>
  )
}

export default Description