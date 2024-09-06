import React from 'react'
import './Future.css'

function Future() {
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
                <p id='fmrow'>At Wizads, we’re not just a marketing agency—we’re your magical growth partners. Our passionate team is dedicated to transforming your brand’s vision into a compelling reality. We achieve this through meticulously tailored strategies and a burst of creative flair that makes your brand stand out.                </p>
                <p id='fmrow'>Choosing Wizads is about elevating your brand to new heights. We don’t merely offer services; we forge a partnership with you, immersing ourselves in your brand’s journey. Our approach is designed to go beyond conventional methods, crafting a brand experience that’s not just unique but extraordinary.                </p>
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