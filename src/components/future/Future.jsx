import React, { useEffect } from 'react'
import './Future.css'
import scrollreveal from 'scrollreveal'


function Future() {

useEffect(()=>{
  scrollreveal().reveal('.future', {
    duration: 2000,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',  // The direction from which the element will reveal
    reset: true,       // If true, animation repeats every time you scroll back
  });
},[])

  return (
    < div className='future'>
    <p id='fheadmain'>
    Where there is vision and creativity, <br /> magic transforms into growth.
    </p>
    <div className="fmain">
        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/21/12/lost.jpg?width=1200" height={'300px'} alt="" />
        <div className="fmsub">
            <p id='fheadmain1'>Experience the Wizads Difference  </p>
            <div className="fmrows">
                <p id='fmrow'>At Wizads, we’re more than just a marketing agency – we’re your dedicated growth partners. Our passionate team works to bring your brand’s vision to life through carefully crafted strategies and a unique creative touch, ensuring your brand not only stands out but thrives in the market.            </p>
                <p id='fmrow'>Choosing Wizads means elevating your brand to new heights. We don’t just provide services; we become your partners, fully immersing ourselves in your brand’s journey. Our approach goes beyond traditional methods, creating a brand experience that is not only unique but truly extraordinary.              </p>
                <p id='fmrow'>We value divergent thinking and curiosity. But most of all, we value a point of view. Because that’s what creates distinction.</p>
            </div>
        </div>
    </div>
    <hr />
    <div className="fclients">
        <p>Our <br /> Clients:</p>
    </div>

    </div>
  )
}

export default Future