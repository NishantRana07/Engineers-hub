// Mentors.js
import React from 'react';
import '../assets/mentors.css';

// Import images
import person1 from '../assets/1st-person.jpg';
import person2 from '../assets/2nd-person.jpg';
import person3 from '../assets/3rd-person.jpeg';
import person4 from '../assets/4th-person.jpg';
import person5 from '../assets/5th-person.png';

const Mentors = () => {
    const personInfo = [
        { url: person1, title: 'Front-End Dev', name: 'Nishant Rana' },
        { url: person2, title: 'Back-End Dev', name: 'Sanjeevani' },
        { url: person3, title: 'Cloud Engineer', name: 'Akash' },
        { url: person4, title: 'Data Scientist', name: 'Sunita Sharma' },
        { url: person5, title: 'HR Manager', name: 'Ankita' }
    ];

    const addMentors = () => {
        return personInfo.map((obj, index) => (
            <div className="person" key={index}>
                <div className="person-border-top"></div>
                <div className="img">
                    <img src={obj.url} alt={obj.name} style={{ height: '100%', borderRadius: '16px' }} />
                </div>
                <span>{obj.name}</span>
                <p className="job">{obj.title}</p>
                <button>Contact</button>
            </div>
        ));
    };

    return (
        <div>
            <div className="per"><p>OUR MENTORS</p></div>
            <div className="mentors">
                {addMentors()}
            </div>
        </div>
    );
};

export default Mentors;
