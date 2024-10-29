import React from 'react';
import Img from '../assets/texh-logo.png';
import '../assets/footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="platform">
          <div
            className="img"
            style={{
              background: `url(${Img}) no-repeat center center`,
              backgroundSize: 'contain',
              height: '150px',
              width: '100px'
            }}
          ></div>
          <h2 >Learn with fun with Us.</h2>
        </div>

        <div className="rel-links">
          <div className="quick">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#" className="abt">About Us</a></li>
              <li><a href="#" className="contactUs">Contact</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div className="social">
            <h3>Socials</h3>
            <ul>
              <li><a href="#"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
              <li><a href="#"><i className="fa-brands fa-x-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
              <li><a href="#"><i className="fa-brands fa-linkedin"></i> Linkedin</a></li>
            </ul>
          </div>
        </div>

        <div className="subscribe">
          <div className="popup">
            <form className="form">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 34" height="34" width="34">
                  <path strokeLinejoin="round" strokeWidth="2.5" stroke="#115DFC" d="M7.08385 9.91666L5.3572 11.0677C4.11945 11.8929 3.50056 12.3055 3.16517 12.9347C2.82977 13.564 2.83226 14.3035 2.83722 15.7825C2.84322 17.5631 2.85976 19.3774 2.90559 21.2133C3.01431 25.569 3.06868 27.7468 4.67008 29.3482C6.27148 30.9498 8.47873 31.0049 12.8932 31.1152C15.6396 31.1838 18.3616 31.1838 21.1078 31.1152C25.5224 31.0049 27.7296 30.9498 29.331 29.3482C30.9324 27.7468 30.9868 25.569 31.0954 21.2133C31.1413 19.3774 31.1578 17.5631 31.1639 15.7825C31.1688 14.3035 31.1712 13.564 30.8359 12.9347C30.5004 12.3055 29.8816 11.8929 28.6437 11.0677L26.9171 9.91666"></path>
                  <path strokeLinejoin="round" strokeWidth="2.5" stroke="#115DFC" d="M2.83331 14.1667L12.6268 20.0427C14.7574 21.3211 15.8227 21.9603 17 21.9603C18.1772 21.9603 19.2426 21.3211 21.3732 20.0427L31.1666 14.1667"></path>
                  <path strokeWidth="2.5" stroke="#115DFC" d="M7.08331 17V8.50001C7.08331 5.82872 7.08331 4.49307 7.91318 3.66321C8.74304 2.83334 10.0787 2.83334 12.75 2.83334H21.25C23.9212 2.83334 25.2569 2.83334 26.0868 3.66321C26.9166 4.49307 26.9166 5.82872 26.9166 8.50001V17"></path>
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#115DFC" d="M14.1667 14.1667H19.8334M14.1667 8.5H19.8334"></path>
                </svg>
              </div>
              <div className="note">
                <label className="title">Subscribe for updates</label>
                <span className="subtitle">Subscribe to this weekly newsletter so you don’t miss out on the new hot tech topics.</span>
              </div>
              <input placeholder="Enter your e-mail" title="Enter your e-mail" name="email" type="email" className="input_field" />
              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 <a href='#navbar'>Tech X Ninjas</a>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
