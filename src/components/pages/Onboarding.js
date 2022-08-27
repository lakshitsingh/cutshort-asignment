import React from 'react'
import ProfileCard from './components/ProfileCard'
import MarketGoods from './components/MarketGoods'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import OtherProfileCard from './components/OtherProfileCard'

const Onboarding = () => {
  const { profile } = useSelector((state) => state.profile)
  const { otherProfile } = useSelector((state) => state.otherProfile)
  const { marketGoods } = useSelector((state) => state.marketGoods)
  return (
    <>
      <section
        className=" p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
      >
        <div className="container-fluid w-75">
          <div className="d-sm-flex align-items-center justify-content-between">


            <div className='container align-items-center card  flex-sm-row border-0'>
              <img src="https://cdn.dribbble.com/users/5536359/avatars/small/96d1605009298139df101ca7391c7d87.jpeg?1660014113" className="col-sm-3 card-img-top rounded-circle" style={{ width: "3rem", height: "3rem" }} alt="..." />
              <div className="col-sm-6 card-body">
                <h5 className="card-title text-center">Onboarding #Exploration</h5>
                <p className="card-text text-center">Eren Türkmen • Follow•<span style={{ color: "#ea4c89" }}>Hire Me</span></p>
              </div>
              <div className="col-sm-3 card-body">
                <Link to="/" className="card-link btn btn-light">Save</Link>
                <Link to="/" className="card-link btn text-light" style={{ backgroundColor: "#ea4c89" }}>Like</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-0 p-lg-0 pt-lg-5 text-center text-sm-start"
      >
        <div className="container w-75">
          <div className="align-items-center justify-content-between">

            {/* <!-- Carousel --> */}
            <div id="demo" className="carousel slide align-self-center" data-bs-ride="carousel">

              {/* <!-- The slideshow/carousel --> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/67e48efc54b41af96fdceb1eb2f1e8fa.png?compress=1&resize=1000x750&vertical=top" alt="Los Angeles" className="d-block img-fluid" style={{ width: "100%" }} />
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/9ded35f5d4db48b0a38d70128775e8c4.png?compress=1&resize=1000x750&vertical=top" alt="Chicago" className="d-block" style={{ width: "100%" }} />
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/06bc6339376b3706107a2417504fb7bc.png?compress=1&resize=1000x750&vertical=top" alt="New York" className="d-block" style={{ width: "100%" }} />
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/4196572828305b986d6757de36bc973b.png?compress=1&resize=1000x750&vertical=top" alt="Chicago" className="d-block" style={{ width: "100%" }} />
                </div>
                <div className="carousel-item">
                  <img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/caaa58fdb069912de2b13f0a049959ea.png?compress=1&resize=1000x750&vertical=top" alt="New York" className="d-block" style={{ width: "100%" }} />
                </div>
              </div>

              {/* <!-- Left and right controls/icons --> */}
              <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
            {/* <!-- Indicators/dots --> */}
            <div className="carousel-indicators position-relative bottom-0 start-0">
              <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" style={{ width: "5rem", height: "5rem" }}><img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/67e48efc54b41af96fdceb1eb2f1e8fa.png?compress=1&resize=1000x750&vertical=top" alt="Los Angeles" className="d-block" style={{ width: "100%" }} /></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="1" style={{ width: "8rem", height: "5rem" }}><img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/9ded35f5d4db48b0a38d70128775e8c4.png?compress=1&resize=1000x750&vertical=top" alt="Chicago" className="d-block" style={{ width: "100%" }} /></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="2" style={{ width: "8rem", height: "5rem" }}><img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/06bc6339376b3706107a2417504fb7bc.png?compress=1&resize=1000x750&vertical=top" alt="New York" className="d-block" style={{ width: "100%" }} /></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="1" style={{ width: "8rem", height: "5rem" }}><img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/4196572828305b986d6757de36bc973b.png?compress=1&resize=1000x750&vertical=top" alt="Chicago" className="d-block" style={{ width: "100%" }} /></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="2" style={{ width: "8rem", height: "5rem" }}><img src="https://cdn.dribbble.com/users/5536359/screenshots/15669113/media/caaa58fdb069912de2b13f0a049959ea.png?compress=1&resize=1000x750&vertical=top" alt="New York" className="d-block" style={{ width: "100%" }} /></button>
            </div>


          </div>
        </div>
      </section>


      <div className='container d-flex flex-column justify-content-center'>
        <p className='mb-5'>
          Yo, what's up guys! 🥳<br />

          It's tiring to write a different description for each shot, just like the shot and move on, love ya! 😘<br />

          Let's create something amazing together! 🧑‍🎨<br />
          Feel free to contact me - <span style={{ color: "#ea4c89" }}>ertuken@gmail.com</span><br />
        </p>
        <div className='position-relative m-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <hr className='col-5' />
            <img src="https://cdn.dribbble.com/users/5536359/avatars/small/96d1605009298139df101ca7391c7d87.jpeg?1660014113" className="card-img-top rounded-circle col-2" style={{ width: "6rem" }} alt="..." />
            <hr className='col-5' />
          </div>
          <h4 className='mt-5' style={{ color: "#ea4c89" }}>Eren Türkmen</h4>
          <p>Let's create something amazing together ✦</p>
          <button className='btn text-light' style={{ backgroundColor: "#ea4c89" }} onClick={() => alert("Message Eren Türkmen")}>Hire Me</button>
        </div>
        <div className='row my-5'>
          <h4 className='col-6'>More by Eren Türkmen</h4>
          <Link className='col-6 text-decoration-none' to="/" style={{ color: "#ea4c89" }}>View Profile</Link>
          {
            profile.map((item, i) => {
              const [heading, image] = item
              return <ProfileCard heading={heading} image={image} key={i} />
            })
          }
        </div>
        <hr />
        <div className='row my-5'>
          <h4 className='d-flex flex-start'>You might also like</h4>
          {
            otherProfile.map((item, i) => {
              const [heading, image, icon, name, group, boost] = item
              return <OtherProfileCard heading={heading} image={image} icon={icon} name={name} group={group} boost={boost} key={i} />
            })
          }
        </div>
        <div className='row my-5'>
          <h4 className='col-6 d-flex flex-start'>Related marketplace goods</h4>
          <Link className='col-6 float-end text-decoration-none' to='/' style={{ color: "#ea4c89" }}>Browse Marketplace</Link>
          <div className='d-flex marketGood'>
            {
              marketGoods.map((item, i) => {
                const [heading, image, icon, price, group] = item
                return <MarketGoods heading={heading} image={image} icon={icon} price={price} group={group} key={i} />
              })
            }
          </div>
          <div className='d-flex my-5 justify-content-center'>
            <div className="keyboard-button-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none" role="img" className="icon keyboard-button-icon">
                <g filter="url(#filter0_d)">
                  <rect y="0.865234" width="22" height="22" rx="5" fill="white"></rect>
                  <path d="M8.27 14.8652H13.77V13.5342H9.788V6.68123H8.27V14.8652Z" fill="#9E9EA7"></path>
                  <rect x="0.5" y="1.36523" width="21" height="21" rx="4.5" stroke="#DBDADE"></rect>
                </g>
                <defs>
                  <filter id="filter0_d" x="0" y="0.865234" width="22" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                    <feOffset dy="2"></feOffset>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.858824 0 0 0 0 0.854902 0 0 0 0 0.870588 0 0 0 1 0"></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                  </filter>
                </defs>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none" role="img" className="icon keyboard-button-icon">
                <g filter="url(#filter0_d)">
                  <rect y="0.865234" width="22" height="22" rx="5" fill="white"></rect>
                  <path d="M13.363 11.3562V10.0912H9.788V7.99023H14.078V6.68123H8.27V14.8652H9.788V11.3562H13.363Z" fill="#9E9EA7"></path>
                  <rect x="0.5" y="1.36523" width="21" height="21" rx="4.5" stroke="#DBDADE"></rect>
                </g>
                <defs>
                  <filter id="filter0_d" x="0" y="0.865234" width="22" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                    <feOffset dy="2"></feOffset>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.858824 0 0 0 0 0.854902 0 0 0 0 0.870588 0 0 0 1 0"></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                  </filter>
                </defs>
              </svg>

              Like
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Onboarding