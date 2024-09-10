import React from 'react'

// eslint-disable-next-line react/prop-types
export const Curvvve=({color})=> {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox=
            "0 0 1044 419"
           className=
            "w-full xl1:-ml-[2.5%] relative z-10" fill=
            {color}>
            <mask id="complacency-mask">
              <path stroke="white" strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="29" d=
              "M39 307.126c432 0 514-628.126 966-42.126">
              </path>
            </mask>
            <path stroke="#383838" strokeLinecap="round"
            strokeLinejoin="round" strokeWidth="29" d=
            "M39 307.126c432 0 514-628.126 966-42.126">
            </path>
            <path className="opacity-[var(--fade-progress)]"
            stroke="#61605F" strokeLinecap="square"
            strokeLinejoin="square" strokeWidth="29"
            strokeDashoffset="1480" strokeDasharray=
            "180 1300" mask="url(#complacency-mask)" d=
            "M39 307.126c432 0 514-628.126 966-42.126"
            data-complacency-indicator></path>
            <path className="opacity-[var(--fade-progress)]"
            stroke="var(--theme-accent)" strokeLinecap=
            "miter" strokeLinejoin="miter" strokeWidth="29"
            strokeDashoffset="1072" strokeDasharray=
            "135 1300" d=
            "M39 307.126c432 0 514-628.126 966-42.126"
            data-complacency-marker></path></svg>

  )
}
