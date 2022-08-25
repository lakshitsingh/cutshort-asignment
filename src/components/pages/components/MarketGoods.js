import React from 'react'

const MarketGoods = (props) => {
  return (
    <div className="card m-4 testimgdiv border-0" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="row card-body mx-0 px-0">
        <div className='row col justify-content-between' style={{ height: "2rem" }}>
          <img src={props.icon} className="rounded-circle col-3 px-0" alt="..." style={{ width: "2rem", height: "2rem" }} />
          <div className='row col-9 mx-0 px-0' style={{ width: "80%" }}>
            <h6 className="card-title col-6 float-start text-truncate px-0">{props.heading}</h6>
            <h6 className='col-6 pe-0'>{props.price}</h6>
            <p className='row mx-0 ps-0'>{props.group}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketGoods