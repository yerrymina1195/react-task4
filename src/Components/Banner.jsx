import React from 'react'

import 'animate.css';
import Arrowicon from '../assets/img/icon-arrow-down.svg'

export const Banner = () => {
  return (
<section className='banner border-none position-relative container-fluid pt-5'>

    <h1 className='fw-bolder text-white pt-5 display-3 '>WE ARE CREATIVES</h1>
    <div className='p-5 '>
<img src={Arrowicon} className='animate__animated animate__shakeY animate__slower animate__infinite' alt=""  />
    </div>

</section>
  )
}
