import i from "../assets/img/image-graphic-design.jpg";
import i2 from "../assets/img/image-photography.jpg";
import {Row } from "react-bootstrap";


import { Picture } from "./Picture";


export const Produittext = () => {
    const projects = [
        {
          title: "Graphic Design",
          description: "Great design makes you memorables. We deliver artwork that underscores your brand message and captures potential clients' attention",
          imgUrl: i,
        },
        {
          title: "Photography",
          description: "Increase your credibility by getting the most stunning high-quality photos that improve your business image.",
          imgUrl: i2,
        },
    
      ];
    return (
        <Row>
        {
            projects.map((project, index) => {
              return (
                <Picture
                  key={index}
                  {...project}
                  />
              )
            })
          }
          </Row>
    )
  }