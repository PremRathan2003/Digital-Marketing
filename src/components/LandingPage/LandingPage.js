import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero">
        <h1>Welcome to our Digital Marketing Agency</h1>
        <p>We help businesses grow their online presence and reach their target audience.</p>
        <Link to="/services" className="btn-primary">Explore Our Services</Link>
      </div>
      <div className="values">
        <h2 className='our-heading'>Our Core Values</h2>
        <div className="value">
          <h3>Creativity</h3>
          <p>We believe in thinking outside the box and delivering innovative solutions.</p>
        </div>
        <div className="value">
          <h3>Collaboration</h3>
          <p>We work closely with our clients to achieve their goals as a team.</p>
        </div>
        <div className="value">
          <h3>Results</h3>
          <p>We are committed to delivering measurable results and driving growth.</p>
        </div>
      </div>
      <div className="values ">
        <h2 className='our-heading services'>Our Services</h2>
        <div className="value">
          <h3>Search Engine Optimization (SEO)</h3>
          <p>Optimize your website to rank higher in search engine results pages.</p>
        </div>
        <div className="value">
          <h3>Social Media Marketing</h3>
          <p>Engage your audience and build brand awareness on social media platforms.</p>
        </div>
        <div className="value">
          <h3>Content Marketing</h3>
          <p>Create valuable content to attract and retain customers.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
