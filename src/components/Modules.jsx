import React from 'react'
import '../styles/Homehero.css'


const moduledata = [
    {
        tag:"day1",
        heading:" Data Analytics",
        description:"You will develop foundational skills in Data Science using Python, NumPy, and Pandas. You’ll understand the business domain and their requirements by analyzing the data which you will add to as you progress through the program.        ",
        topicCovered:["Python", "NumPy", "Pandas"]
    },
    {
        tag:"day2",
        heading:" Model Building using ML",
        description:"You will work with Pandas and Scikit-Learn to become confident in Data Science. You will learn the essentials for working with the data, ML Algorithms & Model Optimization for a solid foundation in Data Science.        ",
        topicCovered:["ML Algorithms", "Model Optimization", "automation", "cloud"]
    },
]
function Modules() {
  return (
   <div className='module-container'>
    <h1 className="fs-1 text-white text-center mt-5">What you can expect in <span className="text-main">2 days</span>?</h1>
    <p className="fs-6 text-center text-white px-4">
    This program is organized into three main modules using Data Science:      Understanding business requirements, Data processing, and Model building. Each module builds on the next, and is designed to prepare you to enter the job market as an entry-level data scientist, or to specialize in one of these areas with further skill .
    </p>
  <div className="conatiner p-3">
    <div className="row align-items-center">
    {
    moduledata.map((item, index)=>(
        <section className=' col-12 col-sm-12 col-md-6 mb-3 h-100'>
            <div className="module p-3 h-100">
            <h4 className="m-tag fs-6 p-1">{item.tag}</h4>
        <h1 className="fs-4 text-main">{item.heading}</h1>
        <p className="fs-6">{item.description}</p>
        
        <h4 className="fs-4 text-main">Topics Covered</h4>
        <hr />
      <ul>
      {
            item.topicCovered.map((item1, index1)=>(
                <li className='mb-2'>{item1}</li>
            ))
        }
      </ul>
 
            </div>
            </section>
    ))
   }
    </div>
  </div>
   </div>
  )
}

export default Modules
