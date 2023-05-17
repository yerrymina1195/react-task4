import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


 export const Testprod = ({imgUrl, name,poste,words}) => {
  useEffect(() => {
    AOS.init();
  }, [])
    return (
        <div className="col-lg-4 col-sm-12 col-md-12 ">
          
          <div data-aos="flip-left"
                   data-aos-easing="ease-out-cubic"
                   data-aos-duration="2000" >

        <img src={imgUrl} alt="free" className="img-fluid rounded-circle mb-5" />
        <p className="mb-5 fw-bold text-secondary text-opacity-75">{words} </p>
        <h4 className=" fw-bolder">{name}</h4>
        <p className="mb-5 fw-bold text-secondary text-opacity-75">{poste}</p>
          </div>

 
    </div>
    )
  }