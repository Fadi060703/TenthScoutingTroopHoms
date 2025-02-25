import React from 'react';
import im from '../assets/flower.png' ;

const PromisePage = () => {
  return (
    <div className="promise-page-container">
      <h1>الوعد الكشفي</h1>
      <img src= { im } alt="Description" style={{ width: '100px', height: 'auto' }} /> {/* Adjust the path and size as needed */}
      <p>
        أعد بأن أبذل جهدي لأقوم بواجبي نحو الله والوطن وأساعد الغير وأعمل بقانون الكشاف
      </p>
    </div>
  );
};

export default PromisePage;