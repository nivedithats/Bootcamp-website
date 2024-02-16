import React from 'react'
import '../styles/Homehero.css'


const moduledata = [
    {
        tag:"Day1",
        heading:"AWS Bootcamp Day1",
        description:"You will learn some fundamentals required for solving coding challenges.Learn how to use libraries. Solve questions by importing required libraries and its packages. Lambda functions are powerful tools in AWS, but they come with their own strengths and weaknesses. ",
        topicCovered:["Lambda Functions", "Understanding Packages and libraries ", "Introduction to AWS fundamentals"]
    },
    {
        tag:"Day2",
        heading:" Model Building using ML",
        description:"Understanding powerful and versatile GUI toolkit that can be used to create a wide variety of applications, from simple scripts to complex desktop applications.Functions eliminate the need to write the same block of code repeatedly. You define it once and can call it whenever needed, making your code cleaner and more efficient.",
        topicCovered:[" Use of Tkinter ", "Functions and its Use"]
    },
]
function Modules() {
  return (
   <div className='module-container'>
    <h1 className="fs-1 text-white text-center mt-5">What you can expect in <span className="text-main">2 days</span>?</h1>
    <p className="text-center text-white px-4 lead">
    The program is organized into two module using AWS. First module will make to work on basic requirement, how to analyze your code in term of time complexity and how Lambda functions helps to solve coding problems. Second module will let you to understand underlying concepts of Tkinter, functions. Each module builds on the next, and is designed to enter the job market as a developer.
    </p>
  <div className="conatiner p-3">
    <div className="row align-items-center">
    {
    moduledata.map((item, index)=>(
        <section className=' col-12 col-sm-12 col-md-6 mb-3 h-100'>
            <div className="module p-3 h-100">
            <h4 className="m-tag fs-6 p-1">{item.tag}</h4>
        <h1 className="fs-4 text-main">{item.heading}</h1>
        <p className=" lead">{item.description}</p>
        
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
