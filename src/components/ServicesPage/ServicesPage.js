import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ServicesPage.css';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services from the backend
    axios.get('http://localhost:8001/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  }, []);

  return (
    <div>
      <h1 className='services-heading'>Our Services</h1>
      <div className="services-container">
        {Array.isArray(services) && services.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.featured_image} alt={service.title} />
            <h2>{service.title}</h2>
            <Link to={`/services/${service.id}`}>Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
