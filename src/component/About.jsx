import React from 'react';

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <section className="hospital-details">
        <p>
          Welcome to Our Hospital, a leading healthcare institution dedicated to providing exceptional medical services to our community. Our mission is to offer comprehensive and compassionate care, utilizing the latest advancements in medical technology and expertise. We are committed to enhancing the health and well-being of our patients through personalized treatment plans and a patient-centered approach.
        </p>
        <p>
          Our hospital boasts a state-of-the-art facility, equipped with modern diagnostic and therapeutic equipment. Our team of highly skilled doctors, nurses, and support staff work tirelessly to ensure the highest standards of care in a comfortable and healing environment. We offer a wide range of medical services, from primary care to specialized treatments, ensuring that all your healthcare needs are met under one roof.
        </p>
        <p>
          At Our Hospital, we believe in the power of community and strive to make a positive impact beyond our hospital walls. Through various outreach programs and partnerships, we aim to promote health education and awareness, empowering individuals to lead healthier lives. Join us on our journey to make a difference in healthcare and experience the exceptional care that sets us apart.
        </p>
      </section>

      <section className="hospital-gallery">
        <h2>Our Facilities</h2>
        <div className="gallery">
          <div className="gallery-item">
            <img src="images/hospital-front.jpg" alt="Hospital Front" className="gallery-image" />
            <p>State-of-the-art hospital building with advanced facilities.</p>
          </div>
          <div className="gallery-item">
            <img src="images/emergency-room.jpg" alt="Emergency Room" className="gallery-image" />
            <p>Fully equipped emergency room ready to handle all critical situations.</p>
          </div>
          <div className="gallery-item">
            <img src="images/operation-theater.jpg" alt="Operation Theater" className="gallery-image" />
            <p>Modern operation theaters with cutting-edge surgical equipment.</p>
          </div>
          <div className="gallery-item">
            <img src="images/patient-room.jpg" alt="Patient Room" className="gallery-image" />
            <p>Comfortable and well-furnished patient rooms for a pleasant stay.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
