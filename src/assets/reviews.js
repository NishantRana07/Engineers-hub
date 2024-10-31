import React from 'react';
import '../assets/reviews.css';

// Import images
import person1 from '../assets/1st-person.jpg';
import person2 from '../assets/2nd-person.jpg';
import person3 from '../assets/3rd-person.jpeg';
import person4 from '../assets/4th-person.jpg';
import person5 from '../assets/5th-person.png';

// Review data
const reviewContent = [
  {
    url:person1,
    title: 'The course content is spot on, and the mentors are always ready to support you.',
    name: 'Nishant Rana'
  },
  {
    url: person2,
    title: 'The practical projects were a game-changer. I built a portfolio that impressed interviewers!',
    name: 'Sanjeevani'
  },
  {
    url: person3,
    title: 'Loved the flexible schedule! I could manage my job and still learn at my own pace.',
    name: 'Akash'
  },
  {
    url: person4,
    title: 'Thanks to the skills I got here, I got a web developer job right after the course!',
    name: 'Sunita Sharma'
  },
  {
    url: person5,
    title: 'The personalized approach really helped me focus on what I needed. Teachers were super helpful!',
    name: 'Ankita'
  }
];

const reviews = () => {
  return (
    <>
    
    <section className="reviews-section">
      {/* Title and Subtitle */}
      
      <div className="reviews-header">
        <h1>Join Our Community, Elevate Your Future!</h1>
        <p>Thousands of students are transforming their careers. Be one of them today.</p>
      </div>

      {/* Reviews Container */}
      <div className="reviews-cardxs">
        {reviewContent.map((review, index) => (
          <div className="cardx review-cardx" key={index}>
            <div className="header">
              <div className="image">
                <img src={review.url} alt={`${review.name}'s review`} />
              </div>
              <div>
                <div className="stars">
                  {/* Render 5 star icons */}
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="name">{review.name}</p>
              </div>
            </div>

            <p className="message">{review.title}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default reviews;
