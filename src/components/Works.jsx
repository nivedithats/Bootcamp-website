import React from 'react'
import '../styles/works.css'
import works from '../data/content.json'

function Works() {
  return (
    <section className='works mt-5' id='why'>
        <div className="container">
            <h1 className=" text-center text-white mb-5">How Our MERN fullstack Bootcamp Works Over <span className="text-main">6 hours</span></h1>
            <div className="work-text-container p-3 p-lg-5">
            <h1 className="heading-subtitle text-white mb-5"> <i class="bi bi-star text-main mx-2"></i>6 HOUR Bootcamp</h1>
            {
                works.working.map((item)=>(
                    <p className='p-large'><i class="bi bi-check2 text-main"></i> {item.works}</p>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default Works
