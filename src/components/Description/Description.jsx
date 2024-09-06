import React from 'react'
import './Description.css'
import DescText from './DescText'
import Features from '../Features'


function Description() {
  return (
    <>
    <div className="margindiv">
    <div className='container1'>
    <p id='tda'>The Spellbook    </p>
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