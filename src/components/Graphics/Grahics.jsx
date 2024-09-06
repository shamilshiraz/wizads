import React from 'react'
import './Graphics.css'

function Grahics() {

   const random=()=> Math.floor(Math.random()*50)

  return (
    <div className='graphicsMain'>
      <div className="grD1">
        <p id='gh1'>Stra<br/>tegy</p>
        <p id='gdes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi nisi debitis! Assumenda blanditiis inventore atque maxime sequi magnam aliquam necessitatibus! Excepturi eligendi ipsum illo dolorem non ab. Laudantium, neque?</p>
      </div>
      <div className="grD2">
        <p id='gh1'>Stra<br/>tegy</p>
        <p id='gdes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi nisi debitis! Assumenda blanditiis inventore atque maxime sequi magnam aliquam necessitatibus! Excepturi eligendi ipsum illo dolorem non ab. Laudantium, neque?</p>
      </div>
      <div className="grD3">
        <p id='gh1'>Stra<br/>tegy</p>
        <p id='gdes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi nisi debitis! Assumenda blanditiis inventore atque maxime sequi magnam aliquam necessitatibus! Excepturi eligendi ipsum illo dolorem non ab. Laudantium, neque?</p>
      </div>
      <div className="grD4">
        <p id='gh1'>Stra<br/>tegy</p>
        <p id='gdes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi nisi debitis! Assumenda blanditiis inventore atque maxime sequi magnam aliquam necessitatibus! Excepturi eligendi ipsum illo dolorem non ab. Laudantium, neque?</p>
      </div>
    </div>
  )
}

export default Grahics