import { useEffect, useState } from 'react'
import './App.css'
import Grahics from './components/Graphics/Grahics'
import Hogo from './components/Hogo'
import { motion } from 'framer-motion'
import Header from './components/Header/Header'
import Description from './components/Description/Description'
import ContactMain from './components/Contact/ContactMain'
import Future from './components/future/Future'
import { SmoothScrollHero } from './SmoothScrollHero'
import CreativityComplex from './components/Curve/CreativityComplex'





function App() {

  const [mousePos,setMousePos]=useState({
    x:0,
    y:0
  });
  console.log(mousePos);
  
  useEffect(()=>{
    const mouseMove =(e)=>{
      console.log(e);
      setMousePos({
        x:e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove",mouseMove);

    return ()=>{
      window.removeEventListener("mousemove",mouseMove)
    }
  },[])

  const variants={
   default:{
    x:mousePos.x-7.7,
    y:mousePos.y-7.7
   }
  }
  const variants2={
    default2:{
      x:mousePos.x,
      y:mousePos.y
     }
  }


  return (
    <>
    <div className="smooth-wrapper">
    <div className="smooth-content">
<motion.div 
className='cursor'
variants={variants}
animate="default"
/>
<motion.div 
className='cursor2'
variants={variants2}
animate="default2"
/>


<SmoothScrollHero/>
<Header/>
<Hogo/>
<Description/>
<CreativityComplex/>
{/* <ScrollTline/> */}
<Grahics/>
<Future/>
<ContactMain/>


</div> 
</div>
    </>
  )
}

export default App
