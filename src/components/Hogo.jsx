import { motion } from 'framer-motion'
import React, { useState } from 'react'
import './Hogo.css'




function Hogo() {
 return (
    <>
  <div  className="hero">
  <img src="./logoSvg.svg" alt="" height={'500px'}/>
  </div>
  <div className="hogosub">
       <p className="hogotxt">wizads</p>
       <div className="hogocreate">
        <h2 id='heronote'>We create <span style={{fontFamily:'editors note'}}>different</span></h2>
        <p>We weave spells that sets your brand apart, sparking growth that outshines the competition.</p>
       </div>
  </div>
  </>
  )
}

export default Hogo