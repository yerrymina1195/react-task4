export const Picture = ({ title, description, imgUrl }) => {
    return (
        <div className="col-lg-6 col-sm-12 col-md-12 px-0">
        <div className='position-relative '>
                <img src={imgUrl} className="img-fluid w-100" />
                <div className='position-absolute bottom-0 start-50 translate-middle w-100 mb-5 mb-md-0 h-25'>
            <h2>{title}</h2>
                <p className=" mx-0 px-0 mx-sm-5 px-sm-5">{description}</p>
            </div>
            </div>
          
            
        </div>
    )
  }