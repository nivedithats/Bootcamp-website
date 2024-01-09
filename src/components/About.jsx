import React, { useEffect, useState } from 'react'
import '../styles/about.css'

function About() {
  const [D, setD] = useState();
  const [H, setH] = useState();
  const [m, setM] = useState();
  const [s, setS] = useState();
        const counter  = () => {
          // Set the date we're counting down to
      let countDownDate = new Date("Dec 29, 2023 10:30:00").getTime();

      // Update the count down every 1 second
      let x = setInterval(function() {

      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setD(days)
      setH(hours)
      setM(minutes)
      setS(seconds)
      // document.querySelector(".day").innerHTML = days;
      // document.querySelector(".hour").innerHTML = hours;
      // document.querySelector(".minute").innerHTML = minutes;
      // document.querySelector(".second").innerHTML = seconds;
      

      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
      }, 1000);
      }

useEffect(() => {
counter()
}, [])

  return (
  <>
    <section id='about' className="d-flex align-items-center justify-content-center mt-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 align-item-center">
                    <h1 className=" text-white"> About <span className="text-main">Bootcamp</span> </h1>
                    <h5 className="text-secondary">
                    
                    </h5>

                  <div className="row mt-2 mb-2">
                    <div className="col-lg-6 col-md-12 col-sm-12 mt-2 mb-2">
                        <div className="card bg-main">
                          <div className="card-body">
                             <h4 className='text-700'> <i className="bi bi-geo-alt text-main-1"></i> Where</h4>
                             <h6 className="text-main-1"> Be Practical Tech Solutions</h6>
                             <h5 className="text-main-1"> <b>Mode: </b> Online</h5>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 mt-2 mb-2">
                        <div className="card bg-main h-100">
                          <div className="card-body">
                              <h4 className='text-700'> <i className="bi bi-calendar-check text-main-1"></i> When</h4>
                              <h6 className="text-main-1">18th to 19th Jan 2024</h6>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 text-center d-flex align-items-center justify-content-center p-3">
                    <div className="text-center mt-5">
                    <a href="#register" className='text-decoration-none'><button className="main-btn px-5 text-700">Register Now <del className='text-danger'>1000/-</del> Free</button></a>
                </div>
                      </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img src="https://res.cloudinary.com/dfshihuf9/image/upload/v1696309349/be-practical/ds-web/xmpzqkmyop23qwda84is.png" alt="no image" className='img-fluid img-repsonsive abt1' />
                </div>
            </div>
        </div>
        
    </section>
    <div className="text-center mt-5">
    <a href="#register" className='text-decoration-none'><button className="main-btn px-5 text-700">Register Now <del className='text-danger'>1000/-</del> Free</button></a>
</div>
  </>
  )
}

export default About
