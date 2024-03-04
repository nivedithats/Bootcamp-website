import React from 'react'
import '../styles/Homehero.css'


const moduledata = [
    {
        tag:"Day1",
        heading:"Foundations of Advanced Cloud Infrastructure ",
        description:"Embark on a journey to master advanced cloud concepts and architectures. Day 1 begins with an exploration of Infrastructure as Code using AWS CloudFormation, providing a practical understanding of how to model and provision AWS resources. Navigate the Cloud Environment Project Lifecycle to ensure effective planning, implementation, and management of cloud projects. Cap off the day by designing and implementing secure, scalable cloud architectures using industry best practices. ",
        topicCovered:["Master advanced cloud concepts and architectures", "Dive into Infrastructure as Code using AWS CloudFormation.  ", "Navigate the Cloud Environment Project Lifecycle. ", "Design and implement secure, scalable cloud architectures. "]
    },
    {
        tag:"Day2",
        heading:"Optimization, Access Management, and Automation ",
        description:"We welcome you to Day 2 of the 'Advanced Cloud Infrastructure Management' workshop, where we continue to dive deeper into optimizing, managing access, and automating cloud deployments. Start the day by mastering the art of optimizing cloud resources and costs effectively. Explore Access Management and AWS Organizations for governance, ensuring secure and compliant cloud environments. Manage the Data and Control Plane on AWS, gaining insights into storage and governance services. Conclude the workshop by delving into automation with Terraform, empowering you to deploy infrastructure consistently and efficiently. Day 2 promises to elevate your cloud expertise and provide practical skills for real-world cloud management scenarios",
        topicCovered:["Optimize cloud resources and costs effectively. ", "Explore Access Management and AWS Organizations for governance", "Manage the Data and Control Plane on AWS. ", "Automate cloud deployments with Terraform"]
    },
]
function Modules() {
  return (
   <div className='module-container'>
    <h1 className="fs-1 text-white text-center mt-5">What you can expect in <span className="text-main">2 days</span>?</h1>
    <p className="text-center text-white px-4 lead">
    We welcome you to the "Advanced Cloud Infrastructure Management" workshop, a comprehensive exploration of AWS Cloud's advanced concepts. Over two days, participants will delve into foundational and advanced topics, gaining hands-on experience and insights into designing, securing, and optimizing cloud environments. 
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
