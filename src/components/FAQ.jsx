import React from 'react'
import Registration from './Registration'

const allFaqs = {
  "faq": [
    {
        "title": "quest1",
        "quest": "What is this MERN fullstack Bootcamp about?",
        "ans":  "This Bootcamp is designed to introduce you to the fundamentals of MERN developemnt,including Basics of MERN, methods, and practical applications"
    },
    {
        "title": "quest2",
        "quest": "Who should attend this Bootcamp?",
        "ans":  "This Bootcamp is suitable for anyone interested in entering the field of MERN fullstack development,regardless of their background or prior experience."
    },
    {
        "title": "quest3",
        "quest": "Do I need to have prior MERN knowledge?",
        "ans":  "No, prior MERN knowledge is not required. This Bootcamp is designed for beginners and covers the basics."
    },
    {
        "title": "quest4",
        "quest": "Will Bootcamp materials be provided?",
        "ans":  "Yes, Bootcamp materials and resources will be provided to participants."
    },
    {
        "title": "quest5",
        "quest": "Is this a paid Bootcamp?",
        "ans":  "No, the Bootcamp costs is Free"
    },
    {
        "title": "quest6",
        "quest": "What should I do if I encounter technical issues during the Bootcamp?",
        "ans":  "In case of technical difficulties, our support team will be available to assist you. Contact information will be provided during the Bootcamp."
    },
    {
      "title": "quest7",
      "quest": "How do I know whether this program is right for me?",
      "ans":  "After reviewing the information on the program landing page, we recommend you submit the short form above to gain access to the program. If you still have questions on whether this program is a good fit for you, please email admin@be-practical.com, and a dedicated program advisor will follow up with you very shortly."
  },
  {
    "title": "quest7",
    "quest": "What are the requirements to earn a certificate?",
    "ans":  "This is a graded program. You must complete a combination of individual assignments, online test, and a final project. Each component carries a certain number of points, and a cumulative score of 60% percent is required to pass and obtain your professional certificate."
}
]
}

function FAQ() {
  return (
    <section id='faq' className='p-3 p-lg-5'>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12">
                <h1 className="text-center text-white mb-5">
                    Frequently Asked <span className="text-main">Questions</span>
                </h1>
            </div>
          </div>

          <div className="row mt-3 mb-3">
           <div className="col-12 col-md-12 col-lg-8">
           <div className="accordion accordion-flush" id='faq'>
                    {
                        allFaqs.faq.map((item,index) => {
                          return (
                            <div className="accordion-item bg-transparent mt-2 mb-2" key={index}>
                              <div className="accordion-header ">
                                <div className="accordion-button collapsed  border bg-main mb-1" data-bs-target={`#${item.title}`} data-bs-toggle="collapse">
                                    <h6 className="text-white"> { item.quest } </h6>
                                </div>
                              </div>
      
                              <div id={item.title} className="accordion-collapse collapse bg-white" data-bs-parent="#faq">
                                  <div className="accordion body p-4">
                                  
                                      <p className="text-black text-justify"> { item.ans } </p>
                                  </div>
                              </div>
                          </div>
                          )
                        })
                    }
                </div>
           </div>
           <div className="col-12 col-md-12 col-lg-4">
            <Registration/>
           </div>
          </div>
        </div>
    </section>
  )
}

export default FAQ
