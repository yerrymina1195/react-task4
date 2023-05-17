import React from 'react'
import oeuf from "../assets/img/image-transform.jpg";
import verre from "../assets/img/image-stand-out.jpg";
import { Produitimage } from "./Produitimage";
import {Produittext } from "./Produittext"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Other = () => {
    return (
     <section className=' container-fluid' id='about'>
        <div className='row'>
        <div className=" col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center py-5 p-lg-0">

        <TrackVisibility>
              {({ isVisible }) =>
          
                <div className={isVisible ? "  d-flex justify-content-center align-items-center py-5 p-lg-0 animate__animated animate__zoomIn" : ""}>
                    <div className='text-start '>
                    <h1 className=" text-success fw-bold mb-5 ">Transform your brand</h1>
                  <p className="mb-5">We are a full-service ceative agency specializing in<br/>helping brands grow fast
                      Engage your clients through <br/>compelling visuals that do most of the marketing for you.
                  </p>
                  <a href="/" className="mt-5  more text-dark">LEARN MORE</a>
                    </div>
                  
              </div>
                }
              </TrackVisibility>
              </div>
              <Produitimage imgUrl={oeuf}/>
              <Produitimage imgUrl={verre}/>
              <div className="col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center py-5 p-lg-0">
              <TrackVisibility>
              {({ isVisible }) =>
              
                    <div className={isVisible ? " text-start animate__animated animate__zoomIn ":""}>
                    <h1 className=" text-success fw-bold mb-5 ">Stand out to the rigth audience</h1>
                  <p className="mb-5">Using a collaborative formula of designers, researchers,<br/> photographers, videographers, and copywriters, we'll <br/>build and extends your brand in digital places.
                  </p>
                  <a href="/" className="mt-5  more text-dark">LEARN MORE</a>
                    </div>
}
                    </TrackVisibility>
              </div>


            </div>
            
            <Produittext/>
  
     </section>
    )
  }
