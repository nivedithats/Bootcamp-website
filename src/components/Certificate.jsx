import React from 'react'
import certificate from '../images/badge.svg'

function Certificate() {
  return (
    <section className='container py-4 mt-5' id="certificate">
        <h1 className="text-center text-white mb-5">
        Get a certificate of completion on an <br /> Intensive Bootcamp from <span className="text-main">Be-practical</span>
                </h1>
        <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
                <img src={certificate} alt="" className='w-100 cerificate border-0' />
            </div>
            <div className="col-12 col-md-12 col-lg-6">
            <h1 className="p-large-xl text-900 text-main mb-3 mt-4">
                    Certificate of Achievement:
                    </h1>
                <p className='text-white p-large'>
                    
                This certificate is awarded in recognition of the participant's active engagement, dedication, and successful completion of the MERN fullstack developemnt Bootcamp. Throughout the Bootcamp, participants gained valuable knowledge and hands-on experience in the field of MERN fullstack.
                </p>
                <h1 className='p-large-xl text-900 text-main mb-3'>MERN fullstack developemnt Bootcamp:</h1>
                <p className="p-large text-white">
                The Bootcamp was conducted on  5<sup>th</sup>-6 <sub>th</sub> jan 2024, and its duration spanned  Day1 3Hours and day2 3Hours total 6 Hours Bootcamp, ensuring participants had ample time to acquire the skills and knowledge necessary to excel in the field of MERN fullstack Developemnt.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Certificate
