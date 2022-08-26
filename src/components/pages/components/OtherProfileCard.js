import React from 'react'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import { Link } from 'react-router-dom'

const OtherProfileCard = (props) => {

  // hover Component
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='row'>photo</div>
              <div className='row rounded text-white' style={{ width: "4rem", backgroundColor: "#e1e4ec" }}>{props.group}</div>
            </div>
            <div className='col'>
              <div className='row'>{props.name}</div>
              <div className='row'>{props.country}</div>
            </div>
            <div className='col'><button className='btn'>+ Follow</button></div>
          </div>
        </div>
      </Popover.Header>
      <Popover.Body>
        <div className='container'>
          <div className=''></div>
        </div>
      </Popover.Body>
    </Popover>

  );
  return (

    <div className='col-sm-4 my-2'>
      <div className="card m-2 border-0" style={{ width: "25rem" }}>
        <div className="position-absolute top-25 end-0" style={{ width: "4rem", height: "4rem" }}><i className="fa fa-copy"></i></div>
        <img src={props.image} className="card-img-top p-0" alt="..." />
        <div className="card-body card-content  position-absolute bottom-0 start-0 d-flex justify-content-center" style={{ width: "25rem" }}>
          <h5 className="card-title col-6 text-truncate text-light">{props.heading}</h5>
          <Link to="/" className="btn btn-light col-3 m-1"><i className="fa fa-plus-square bg-secondary"></i></Link>
          <Link to="/" className="btn btn-light col-3 m-1"><i className="fa fa-heart bg-secondary"></i></Link>
        </div>
      </div>

      <div className='row'>
        <div className='row col-9 d-flex justify-content-start'>
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <img src={props.icon} className="rounded-circle col-3" alt="..." style={{ width: "3rem" }} />
          </OverlayTrigger>
          <div className='col-6 float-start px-0' style={{ width: "9rem" }}>{props.name}</div>
          <div className='col-3 rounded text-white float-start' style={{ width: "4rem", backgroundColor: "#e1e4ec" }}>{props.group}</div>
        </div>
        <div className='col-2 float-end' style={{ color: "#e1e4ec" }}>{props.boost}</div>
      </div>
    </div>

  )
}

export default OtherProfileCard