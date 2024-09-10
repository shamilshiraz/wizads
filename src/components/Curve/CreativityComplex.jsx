import React, { useEffect } from 'react'
import './CreatComp.css'
import scrollreveal from 'scrollreveal';



function CreativityComplex() {

  useEffect(()=>{
    scrollreveal().reveal('.createcomp', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'bottom',  // The direction from which the element will reveal
      reset: true,       // If true, animation repeats every time you scroll back
    });
  },[])
   
  

  return (
    <div className='createcomp'>
        <div className="cc1">
            <p>Progress can be enchanting till taketh for granted</p>

            <div className="cc1sub" style={{display:'flex'}}>
                <div style={{width:'225px',fontSize:'15px',textAlign:'left'}}>At Wizads, we ensure  <br />that your brand’s  magic never fades. <br /> As companies reach the peak <br /> of their growth journey, <br /> they often face hurdles like diminished momentum, market saturation, and escalating competition.  </div>
                <div style={{width:'225px',fontSize:'15px'}}>Our spellbinding approach combines strategic brilliance, <br /> creative flair, and a touch of wizardry <br /> to keep your growth on a continuous rise. <br /> We help your brand shine brighter, <br /> delivering exceptional value that captivates and retains your audience.</div>
            </div>


        </div>
        <div className='cc2'  style={{textAlign:'right', fontSize:'85px'}}>
        <span style={{fontFamily:'editors note',color:'white'}}>The</span>
            <div className="cc2a">
            Developement <br />
            Arc</div>
        </div>

    </div>
  )
}



export default CreativityComplex