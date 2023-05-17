export const Produitimage = ({imgUrl}) => {
    return (
        <div className="col-lg-6 col-sm-12 col-md-12 px-0">
        <div>
                <img src={imgUrl} className="img-fluid w-100" />
            </div>
        </div>
    )
  }