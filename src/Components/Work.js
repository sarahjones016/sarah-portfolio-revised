import React from 'react'
import './Work.css';

function Work() {
  return (
    <div id='work' className='work'>
        <div className='workContent'>
          <div className='container-holder'>
          <h1>WORK EXPERIENCE</h1>
            <div className='work-container'>
              <div className='bubble'>
                <div className='title'>
                   <h4>Senior Customer Success Manager @ Wunderkind</h4>
                  <h4 className='date'>Jan 2023 - Feb 2023</h4>
                </div>
                <h6>New York, New York • wunderkind.co</h6>
                <div className='details'>
                  <ul className='bullet-container'>
                    <li>Skills: Customer Success · Account Management · Marketing Strategy · Digital Marketing · People Management · Communication</li>
                  </ul>
                </div>
              </div>
              <div className='bubble'>
                <div className='title'>
                  <h4>Customer Success Manager @ Wunderkind</h4>
                  <h4 className='date'>Oct 2021 - Jan 2023</h4>
                </div>
                <h6>New York, New York • wunderkind.co</h6>
                <div className='details'>
                  <ul className='bullet-container'>
                    <li>Owned the relationship and ultimate success of a dedicated segment of Wunderkind subscription clients (totaling $1.3M ARR), including initial onboarding, strategy development, campaign optimization, and renewal.</li>
                    <li>Helped generate $18k in upsell/expansion revenue for a single portfolio of accounts, within the span of 6 months. Selected as 1 of 3 Customer Success representatives to sit on the Feasibility Team.</li>
                    <li>Utilized technical and strategic aptitude to guide other members of Customer Success, alongside Technical Solutions Managers and Integrations Engineers.</li>
                    <li>Directly managed a Customer Success Associate and their mid-market accounts. Provided mentorship and ongoing support, resulting in strong client retention rates and their eventual promotion to Customer Success Manager.</li>
                  </ul>
                </div>
              </div>
              <div className='bubble'>
                <div className='title'>
                  <h4>Customer Success Associate @ Wunderkind</h4>
                  <h4 className='date'>Nov 2020 - Oct 2021</h4>
                </div>
                <h6>New York, New York • wunderkind.co</h6>
                <div className='details'>
                  <ul className='bullet-container'>
                    <li>Managed a book of business of mid-market accounts while supporting a Senior Customer Success Manager/Associate Director on their larger strategic accounts</li>
                  </ul>
                </div>      
              </div>
              
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default Work