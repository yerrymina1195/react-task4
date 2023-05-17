
export const Finalimg = ({imgUrl,alt}) =>{

    return(

        <div className="col-lg-3 col-sm-6 col-md-12 px-0">
        
               <img src={imgUrl} alt={alt} className="img-fluid" />
        
     </div>
    )
}