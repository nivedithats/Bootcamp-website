import React from 'react'
import '../styles/Homehero.css'


const moduledata = [
    {
        tag:"day1",
        heading:"Web Development",
        description:"You will develop foundational skills in web development using JavaScript, HTML, and CSS. You’ll also create your own personal portfolio in GitHub, which you will add to as you progress through the program.",
        topicCovered:["HTML", "CSS", "personal portfolio in GitHub", "javascript"]
    },
    {
        tag:"day2",
        heading:"Back-End Development",
        description:"You will work with MongoDB, ExpressJS, and NodeJS to become confident in the MERN stack. You will learn the essentials for working in the cloud, automation, and deployment for a solid foundation in FullStack.",
        topicCovered:["MongoDB", "ExpressJs", "NodeJS", "automation"]
    },
    {
        tag:"day3",
        heading:"Front-End Development",
        description:"You will dive deep into front-end development using one of the most popular frameworks, React. You will write clean, concise code with JavaScript ES6 and use these skills to work with web components in React. You will learn how to build React applications and how to implement and deploy them on real time hosting.",
        topicCovered:["React", "JavaScript ES6", "real time hosting"]
    }
]
function Modules() {
  return (
   <div className='module-container'>
    <h1 className="fs-1 text-white text-center mt-5">What you can expect in <span className="text-main">3 days</span>?</h1>
    <p className="fs-6 text-center text-white px-4">
    This program is organized into three main modules using the MERN stack: Web Development, Front-End Development/+React, and Back-End Development. Each module builds on the next, and is designed to prepare you to enter the job market as an entry-level full-stack developer, or to specialize in one of these areas with further skill development.
    </p>
  <div className="conatiner p-3">
    <div className="row align-items-center">
    {
    moduledata.map((item, index)=>(
        <section className=' col-12 col-sm-12 col-md-4 mb-3'>
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
