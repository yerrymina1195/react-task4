
import bottles from "../assets/img/image-gallery-milkbottles.jpg"
import orange from "../assets/img/image-gallery-orange.jpg"
import cornet from "../assets/img/image-gallery-cone.jpg"
import sugar from "../assets/img/image-gallery-sugarcubes.jpg"
import { Finalimg } from "./Finalimg";


export const Sectfinal = () =>{
    const lastpicture=[
        {
            imgUrl: bottles,
            alt:"it3"
        },
        {
            imgUrl: orange,
            alt:"it4"
        },
        {
            imgUrl: cornet,
            alt:"it5"
        },
        {
            imgUrl: sugar,
            alt:"it6"
        },
    ]

    return(
        <section className="container-fluid" id="projects">
            <div className="row">
                {
                    lastpicture.map((last,index)=>{
                        return(
                        <Finalimg
                        key={index}
                        {...last}
                        />
                        )
                    })
                }
            </div>
        </section>
    )
}