import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Assets/Navbar.css';
import Sidebar from './Sidebar';

function Navbar() {

  
 
  return (
    <div className='container'>
    <Header/>
    <Sidebar/>
    
    <h2>Order Medicine Here!</h2>
    <div>
        <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Image 1" />
        <img src="https://image-prod.iol.co.za/16x9/800/Higher-schedule-doesn-t-just-affect-where-in-a-pharmacy-you-ll-find-a-medication-Picture-Indianexpress?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/aa1bf6bc-d126-578c-b8c7-8aa01e45313d" alt="Image 2" />
        <img src="https://keralakaumudi.com/web-news/en/2022/09/NMAN0359911/image/medicine-.1.1810106.jpg" alt="Image 3" />
        
        
      </div>
    <br/>
    <br/>
    <br/>
    <Footer/>
    </div>
   
  );
}

export default Navbar;