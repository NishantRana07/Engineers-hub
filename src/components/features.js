import React, { useEffect, useRef } from 'react';
import '../assets/features.css';

const Features = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const features = [
    { title: "Personalized Learning", subtitle: "Customized learning paths tailored to individual goals." },
    { title: "Expert Instructors", subtitle: "Industry professionals with real-world experience." },
    { title: "Interactive Courses", subtitle: "Hands-on projects and live sessions for practical learning." },
    { title: "Flexible Scheduling", subtitle: "Learn at your own pace with 24/7 course access." },
    { title: "Career Support", subtitle: "Guidance and resources for career advancement." },
    { title: "Cutting-Edge Content", subtitle: "Courses updated with the latest industry trends." },
    { title: "Global Community", subtitle: "Collaborate with peers and experts worldwide." }
  ];

  const cardnWrapperRef = useRef(null);
  const scrollSpeed = 1;

  useEffect(() => {
    const cardnWrapper = cardnWrapperRef.current;
    const cardnWidth = cardnWrapper.children[0].offsetWidth;
    const totalWidth = cardnWidth * features.length * 2;

    // Duplicate features for infinite scrolling

    // Set initial scroll amount
    let scrollAmount = 0;

    // Auto-scroll function
    function autoScroll() {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= totalWidth / 2) {
        scrollAmount = 0;
      }
      cardnWrapper.scrollLeft = scrollAmount;
      requestAnimationFrame(autoScroll);
    }

    autoScroll();
  }, [features]);

  return (
    <div className="about">
      <div className="texts">
        <h3>What makes us different?</h3>
        <h5>We provide personalized learning paths, enabling students to progress at their own pace. Our instructors are industry experts, offering real-world insights that go beyond textbooks.</h5>
      </div>

      <div className="cardnwrapper" ref={cardnWrapperRef} style={{ display: 'flex', overflowX: 'hidden' }}>
        {features.concat(features).map((feature, index) => (
          <div className="cardn" key={index}>
            <div className="title">
              <h3>{feature.title}</h3>
            </div>
            <div className="sub">
              <h4>{feature.subtitle}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="more-services">
        <button className="animated-button">
          <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text contactUs">Contact us</span>
          <span className="circle"></span>
          <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Features;
