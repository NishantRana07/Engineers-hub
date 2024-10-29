// Course.js
import React from 'react';
import '../assets/course.css';

const courses = [
  {
    url: 'https://media.istockphoto.com/id/1149101430/photo/c-text.webp?b=1&s=612x612&w=0&k=20&c=LUqEMDc6AzAUep7iQrA2I1UYH4tdUGq_ksyEnmHM0s0=',
    title: 'C++ Course',
    description: 'Ultimate C++ course',
    price: '69',
  },
  {
    url: 'https://media.istockphoto.com/id/1335247101/photo/computer-with-elements-of-program-code-on-the-screen-and-the-inscription-java-and-a-keyboard.webp?b=1&s=612x612&w=0&k=20&c=ZgjX06zhkmg3WSnQmKvgGYNTfI6bXvHUE8Teo7ZTI_g=',
    title: 'Java Course',
    description: 'Ultimate Java course',
    price: '69',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D',
    title: 'Web Dev Course',
    description: 'Ultimate Web development course',
    price: '69',
  },
  {
    url: 'https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.webp?b=1&s=612x612&w=0&k=20&c=kpQCCaxIActGQP9ToVrFN3qP55MMXA4Sdnomymdr_64=',
    title: 'JavaScript Course',
    description: 'Ultimate JavaScript course',
    price: '69',
  },
];

const Course = ({ url, title, description, price }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={url} alt={title} style={{ width: '100%', objectFit: 'fill' }} />
      </div>
      <div className="card-info">
        <p className="text-title">{title}</p>
        <p className="text-body">{description}</p>
      </div>
      <div className="card-footer">
        <span className="text-title">₹{price}</span>
        <div className="card-button btn">
          <svg className="svg-icon" viewBox="0 0 20 20">
            <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
            <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
            <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

const CourseList = () => {
  return (
    <div className="products">
      {courses.map((course, index) => (
        <Course
          key={index}
          url={course.url}
          title={course.title}
          description={course.description}
          price={course.price}
        />
      ))}
    </div>
  );
};

export default CourseList;
