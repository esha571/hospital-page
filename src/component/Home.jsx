import React, { useState, useEffect } from 'react';

function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchDoctors = () => {
      const doctorList = [
        { id: 1, name: 'Dr. Fahad', specialty: 'Cardiology', image: 'images/dr-fahad.jpg', info: 'Expert in treating heart conditions and diseases.' },
        { id: 2, name: 'Dr. Adeel', specialty: 'Neurology', image: 'images/dr-adeel.jpg', info: 'Specialist in neurological disorders and treatments.' },
        { id: 3, name: 'Dr. Khadija', specialty: 'Pediatrics', image: 'images/dr-khadija.jpg', info: 'Experienced pediatrician focused on child health.' },
        { id: 4, name: 'Dr. Ali', specialty: 'Ophthalmology', image: 'images/dr-ali.jpg', info: 'Eye specialist with extensive experience in treating vision disorders.' },
        { id: 5, name: 'Dr. Sara', specialty: 'Psychiatry', image: 'images/dr-sara.jpg', info: 'Psychiatrist with a focus on mental health and wellness.' },
      ];
      setDoctors(doctorList);
    };
    fetchDoctors();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Our Hospital</h1>
      <h2>Our Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id} className="doctor-card">
            <img src={doctor.image} alt={`${doctor.name}`} className="doctor-image" />
            <div className="doctor-details">
              <h3>{doctor.name}</h3>
              <p><strong>Specialty:</strong> {doctor.specialty}</p>
              <p>{doctor.info}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
