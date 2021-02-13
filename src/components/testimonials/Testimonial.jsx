import './Testimonial.css';
import React from 'react';

import imagedaniel from '../../images/imagedaniel.jpg'
import imagejeanette from '../../images/imagejeanette.jpg'
import imagejonathan from '../../images/imagejonathan.jpg'
import imagekira from '../../images/imagekira.jpg'
import imagepatrick from '../../images/imagepatrick.jpg'

const testimonials = [
  {
    id: 1,
    hasQuoteSvg: true,
    image: imagedaniel,
    name: "Sushant Mathur",
    title: "Feedback Form",
    header: "This gym is amazing. Amazing facility, top equipment and great environment. Good service with friendly staff and super clean and comfortable gym for everyone from beginners to professional athletes",
    description: "“ This gym is amazing. Amazing facility, top equipment and great environment. Good service with friendly staff and super clean and comfortable gym for everyone from beginners to professional athletes ”"
  },
  {
    id: 2,
    hasQuoteSvg: false,
    image: imagejonathan,
    name: "Khushboo",
    title: "Google Review",
    header: "Such a life-changing experience. Highly recommended!",
    description: "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”"
  },
  {
    id: 3,
    hasQuoteSvg: false,
    image: imagejeanette,
    name: "Nishant Kujur",
    title: "Google Review",
    header: "Cool place for work out,  Good Ambience and friendly environment",
    description: "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”"
  },
  {
    id: 4,
    hasQuoteSvg: false,
    image: imagepatrick,
    name: "Priya Ranjan",
    title: "Google Review",
    header: "Its like gym set up at your own house with Skilled Tainer with versatile 💪 activity. Worthwhile ..... customized....... Empathize",
    description: "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”"
  },
  {
    id: 5,
    hasQuoteSvg: false,
    image: imagekira,
    name: "Kashyap Shubham",
    title: "Google Review",
    
    header: "Its the best spot for everyone who wants to get in or be in a perfect physical condition. The trainers are really very engaging and doesn't allow you give up. They constantly try their best to push you harder and make you fit. It was my first gyming experience and I realized that I couldn't have made a better decision to join here.",
    
    description: "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”"
  },
]

function Feedback() {
  return (
    <div>
     
    <div className="testimonial">
       
    <h1>Check out these REVIEWS!</h1>
        
    <div className='cards__container'>
    <div className='cards__wrapper'>
          
    <div className="testimonials-cnt">
          
            {testimonials.map(item => (
              <div key={item.id} id={`card-${item.id}`} className="card">
                <div className="intro">
                  <img src={item.image} alt="prof-img"></img>
                  <div className="person">
                    <h6 id="name">{item.name}</h6>
                    <h6 id="title">{item.title}</h6>
                  </div>
                </div>
                <div className="person-details">
                  <h2>{item.header}</h2>
                  
                </div>
              </div>
            ))}
          </div>
          </div>
        </div >
      </div>
    </div>
    
  );
}

export default Feedback;
