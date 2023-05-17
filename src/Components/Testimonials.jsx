
import emili from "../assets/img/image-emily.jpg"
import jennie from "../assets/img/image-jennie.jpg"
import thomas from "../assets/img/image-thomas.jpg"
import { Testprod } from "./Testprod";

export const Testimonials = () =>{

    const temoins= [
        {
            name: "Emily R.",
            imgUrl: emili,
            poste:"Marketing Director",
            words:"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          },
        {
            name: "Thomas S",
            imgUrl: thomas,
            poste:"Chief Operating Officer",
            words:"Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
          },
        {
            name: "Jennie F.",
            imgUrl: jennie,
            poste:"Business Owner",
            words:"Incredible end result! Our sales increased over 400% when we worked with Sunnyside.Highly recommended!"
          },
          
       
    ]


    return(
        <section className="container-fluid p-5" id="services">
            <h3 className=" py-5 text-secondary text-opacity-75 fw-bold">CLIENT TESTIMONIALS</h3>
            <div className="row ">
          {
            temoins.map((test ,index) => {
                return (
                    <Testprod
                      key={index}
                      {...test}
                      />
                  )
            })
          }
            </div>


        </section>
    )



}