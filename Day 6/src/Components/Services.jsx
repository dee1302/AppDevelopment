import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Services.css'
import Header from './Header';

function Services() {
    return (
      <div><Header/>
      <div className='services-container'>
        <div><center>
      <h1>Online Ordering</h1></center>
      <p>We understand the importance of easy access to healthcare products and medications. With our user-friendly website and mobile app, you can browse our extensive catalog and place orders from the comfort of your home. Our online ordering service is available 24/7, allowing you to shop at your convenience.</p>

      <h2>Medication Management</h2>
      <p>Managing your medications has never been easier. We offer services such as prescription refills, automatic prescription reminders, and medication synchronization to help you stay on top of your treatment plan. Our team of pharmacists is also available to answer any medication-related questions you may have.</p>

      <h2>Customer Support</h2>
      <p>Our customer support team is available to assist you with any inquiries, concerns, or issues you may encounter. We are dedicated to providing exceptional customer service and ensuring your complete satisfaction with our services.</p>

      
      

    </div>
    </div></div>
  );
}

export default Services;
