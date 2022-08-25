import React from 'react'

// import components
import MenuItems from './MenuItems'

import { useSelector } from 'react-redux' // import useSelector to read data from redux

import { Link } from 'react-router-dom'

const Header = () => {

  const { nav } = useSelector((state) => state.nav);         //reading nav menu data
  const { auth, link } = useSelector((state) => state.auth); //reading login button data

  return (

    // top bar
    <div className='container-fluid'>
      <div className='row bg-dark text-light topHeader'>
        <span className='col-11'>📚 LAST CHANCE to register for our 4-week Intro to UI Design & Figma Fundamentals course. <Link className='btn btn-transparent border-0' to="/" style={{ color: "#ea4c89" }}>Sign up now.</Link></span>
        <div className='col-1 text-light bg-transparent'>X</div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">dribble</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* Nav menu Links from store */}
              <MenuItems heading="Inspiration" menuItemsLinks={nav[0].Inspiration} />
              <MenuItems heading="Find Work" menuItemsLinks={nav[1].FindWork} />
              <MenuItems heading="Learn Design" menuItemsLinks={nav[2].LearnDesign} />
              <MenuItems heading="Go Pro" menuItemsLinks={nav[3].GoPro} />
              <MenuItems heading="Design Files" menuItemsLinks={nav[4].DesignFIles} />
              <MenuItems heading="Hire Designers" menuItemsLinks={nav[5].HireDesigners} />
            </ul>
            <button type="submit" className='border-0 btn-transparent bg-transparent'><i className="fa fa-search"></i></button>
            <Link className="btn btn-outline-transparent" to={link}>{auth}</Link>
            <Link className="btn text-light" style={{ backgroundColor: "#ea4c89" }} to="/" type="submit">Share My Work</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header