import React, { useEffect } from 'react'
import './Graphics.css'
import scrollreveal from 'scrollreveal';


function Grahics() {

  useEffect(()=>{
    scrollreveal().reveal('#grD', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'left',  // The direction from which the element will reveal
      reset: true,       // If true, animation repeats every time you scroll back
    });
  },[])

  return (
    <div className='graphicsMain'>
      <div className="grD1" id='grD'>
        <p id='gh1'>Stra-<br/><span id='gh2'>tegy</span></p>
        <p id='gdes'> With a solid vision in place, we craft precise strategies that turn your goals into actionable plans. Our strategic approach is data-driven and tailored to your unique needs, ensuring that every step we take is purposeful and effective.
        </p>
      </div>
      <div className="grD2" id='grD'>
        <p id='gh1'>Inno-<br/><span id='gh2'>vation</span></p>
        <p id='gdes'>Creativity is at the heart of what we do. We bring fresh ideas and cutting-edge solutions to the table, constantly pushing the boundaries to keep your brand ahead of the curve. Our innovative mindset ensures that your brand stands out in a crowded market and captivates your audience.</p>
      </div>
      <div className="grD3" id='grD'>
        <p id='gh1'>Insi-<br/><span id='gh2'>ghts</span></p>
        <p id='gdes'>Data is our compass. We gather and analyze insights to inform our strategies and measure success. By understanding trends, behaviors, and performance metrics, we make informed decisions that drive results and continuously optimize your brand’s growth.</p>
      </div>
      <div className="grD4" id='grD'>
        <p id='gh1'>Vis-<br/><span id='gh2'>ion</span></p>
        <p id='gdes'>We start with a clear and ambitious vision for your brand. We see beyond the present, imagining where your brand could go and how it can achieve its fullest potential. Our vision guides every project, ensuring that each strategy is aligned with your long-term goals.
        </p>
      </div>
    </div>
  )
}

export default Grahics