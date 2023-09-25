import React from 'react';
import '../Assets/Home.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
function Homepage() {
  return (
    <div>
    <div className='container'>
    <Header/>
    
    <h2>Reliable Products!</h2>
    
    <div>
        <img src="https://www.popsci.com/uploads/2022/12/21/sick-kid-cold-medicine.jpg?auto=webp" alt="Image 1" />
        <img src="https://scx2.b-cdn.net/gfx/news/2017/medsbymonthl.jpg" alt="Image 2" />
        <img src="https://5.imimg.com/data5/SELLER/Default/2021/4/OQ/HD/GF/1890507/herbal-medicine-for-low-blood-pressure-500x500.png" alt="Image 3" />
        <img src="https://5.imimg.com/data5/SELLER/Default/2022/3/ZU/TO/JB/1890507/herbal-medicine-for-high-blood-pressure-500x500.png" alt="Image 4" />
        <img src="https://images.indianexpress.com/2023/08/medicines-1.jpg" alt="Image 5" />
        <img src="https://static.independent.co.uk/2023/03/14/13/14131919-e986d244-f75b-452a-b4ef-81207ea4232c.jpg" alt="Image 6" />
        
        
      </div>
    <br/>
    <br/>
    </div>
    <Footer/>
</div>
  );
}

export default Homepage;
