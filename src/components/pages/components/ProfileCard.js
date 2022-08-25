import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = (props) => {
  return (

    <div className="card col-2 m-2 border-0" style={{ width: "18rem" }}>
      <div className="position-absolute top-25 end-0" style={{ width: "4rem", height: "4rem" }}><i className="fa fa-copy "></i></div>
      <img src={props.image} className="card-img-top p-0" alt="..." />
      <div className="card-body card-content  position-absolute bottom-0 start-0 mx-3 d-flex justify-content-center" style={{ width: "16rem" }}>
        <h5 className="card-title col-6 text-truncate text-light">{props.heading}</h5>
        <Link to="/" className="btn btn-light col-3 m-1"><i className="fa fa-plus-square bg-secondary"></i></Link>
        <Link to="/" className="btn btn-light col-3 m-1"><i className="fa fa-heart bg-secondary"></i></Link>
      </div>
    </div>

  )
}

export default ProfileCard