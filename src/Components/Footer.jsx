import React from 'react'

import face from "../assets/img/icon-facebook.svg"
import instagram from "../assets/img/icon-instagram.svg"
import twitter from "../assets/img/icon-twitter.svg"
import pinterest from "../assets/img/icon-pinterest.svg"
export default function Footer() {
  return (
   <section className='container-fluid p-5 footer'>
    <h1 className='text-secondary fw-bolder fs-3'>Sunnysine</h1>
    <div className='mt-5'>
    <ul class="d-flex justify-content-center align-items-center gap-3 list-unstyled">
            <li class="p-2">
              <a href="/" target="_blank" >
              <img src={face} alt="" srcset="" /> 
              </a>
            </li>
            <li class="p-2">
              <a href="/" className='text-secondary'>
              <img src={instagram}  alt="" srcset="" />   
            </a>
            </li>
            <li class="p-2">
              <a href="/" className='text-danger'>
              <img src={twitter} alt="" srcset="" />             
               </a>
            </li>
            <li class="p-2">
              <a href="/" className='text-danger'>
              <img src={pinterest} alt="" srcset="" />             
               </a>
            </li>
          </ul>
    </div>

   </section>
  )
}
