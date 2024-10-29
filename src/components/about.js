document.addEventListener("DOMContentLoaded", function () {
    // About Us Section
    const aboutLink = document.querySelectorAll(".abt");
    aboutLink.forEach((obj) => {
      obj.addEventListener("click", function () {
        removebody();
        addAbout();
      });
    });
  
    // Home Button
    const homelink = document.querySelector(".home");
    homelink.addEventListener("click", function () {
      addHeadings();
    });
  
    // Contact Us Button
    const contactUs = document.querySelectorAll(".contactUs");
    contactUs.forEach((obj) => {
      obj.addEventListener("click", function () {
        removebody();
        addContactUs();
      });
    });
  
    function removebody() {
      let body = document.querySelector(".body");
      let headings = document.querySelectorAll(".per ");
      let prod = document.querySelector(".products");
      let ment = document.querySelector(".mentors");
      let abot = document.querySelector(".about");
      let rev = document.querySelector(".reviews-section");
  
      body.style.display = "none";
      prod.style.display = "none";
      ment.style.display = "none";
      abot.style.display = "none";
      rev.style.display = "none";
      
      headings.forEach((obj) => {
        obj.style.display = "none";
      });
    }
  
    function addHeadings() {
      let headings = document.querySelectorAll(".per ");
      headings.forEach((obj) => {
        obj.style.display = "block";
      });
    }
  
    function addAbout() {
      let body = document.querySelector(".body");
      body.style.display = "flex";
      body.innerHTML = `
        <section class="about-us-x">
          <div class="container">
            <h1>About Us</h1>
            <p>Welcome to Er Hub, a dedicated platform for online education and personal growth. Our mission is to provide accessible, high-quality courses that empower learners to achieve their goals. With expert instructors, interactive content, and a community-driven approach, we aim to make learning a seamless and enriching experience.</p>
            <p>At Er Hub, we believe that education is the key to unlocking potential. Our courses are designed to cater to a wide range of learners, from beginners to advanced professionals, ensuring that everyone can find something valuable to enhance their skills.</p>
            <p>Join us on this journey of knowledge and growth. Whether you're looking to acquire new skills, advance your career, or simply explore new interests, we're here to support you every step of the way.</p>
          </div>
        </section>
      `;
    }
  
    function addContactUs() {
      let body = document.querySelector(".body");
      body.style.display = "block";
      body.innerHTML = `
        <section class="contact-us">
          <div class="container">
            <h1 style='margin-bottom:40px'>Contact Us</h1>
            <div class="contact-details">
              <div class="company-info">
                <h2>Our Office</h2>
                <p>Er Hub</p>
                <p>1234 Learning Lane, Suite 101</p>
                <p>Dehradun, India</p>
                <p>Phone: +91 123-456-7890</p>
                <p>Email: support@erhub.com</p>
                <p>Office Hours: Mon-Fri, 9 AM - 5 PM</p>
              </div>
              <div class="contact-form">
                <h2>Get in Touch</h2>
                <form>
                  <label for="name">Your Name:</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" required>
                  
                  <label for="email">Your Email:</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required>
                  
                  <label for="phone">Your Phone (optional):</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
                  
                  <label for="message">Your Message:</label>
                  <textarea id="message" name="message" rows="5" placeholder="Write your message here" required></textarea>
                  
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>
            <div class="social-media">
              <h2>Follow Us</h2>
              <a href="https://facebook.com" target="_blank" class="social-icon"><i class="fa-brands fa-facebook"></i> Facebook</a>
              <a href="https://twitter.com" target="_blank" class="social-icon"><i class="fa-brands fa-square-x-twitter"></i> Twitter</a>
              <a href="https://github.com" target="_blank" class="social-icon"><i class="fa-brands fa-square-github"></i> Github</a>
              <a href="https://linkedin.com" target="_blank" class="social-icon"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
            </div>
            <div class="map">
              <h2 style='font-size:1.5em;text-align:center;margin:20px 0px'>Our Location</h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.0336246896964!2d77.8228730743976!3d30.378403074757184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2979f9b8644d%3A0x75190c6c52a7d600!2sJB%20Institute%20of%20Technology%20%7C%20Engineering%20College%20in%20Dehradun%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sin!4v1724649590272!5m2!1sen!2sin"
                width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
              </iframe>
            </div>
          </div>
        </section>
      `;
    }
  });
  