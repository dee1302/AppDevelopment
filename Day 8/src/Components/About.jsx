import React from 'react';
import '../Assets/About.css'
import Header from './Header';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-container">
        <Header/>
      <h2>About E-Medic</h2>
      <p>
      Welcome to E-Medic, your trusted partner in healthcare and wellness. We are a dedicated online platform committed to providing convenient access to a wide range of healthcare products and services, all from the comfort of your home. At [Your Medical Store Name], your well-being is our priority.
      </p>
      <p>
      Our mission is to empower individuals to take control of their health by offering a comprehensive selection of high-quality medical products and supplies at competitive prices. We strive to make healthcare accessible to everyone, ensuring that you have the resources you need to lead a healthy and fulfilling life.
      </p>
      <p>
      Quality is at the core of everything we do. We work diligently to source products from trusted manufacturers and suppliers, ensuring that each item in our inventory meets the highest standards for safety and efficacy. Your health and safety are non-negotiable, and we take every measure to uphold these principles.
      </p>
      <p>
      Thank you for choosing [Your Medical Store Name] as your trusted healthcare partner. We look forward to supporting your journey towards better health and well-being.
      </p>
    </div>
  );
}

export default About;
