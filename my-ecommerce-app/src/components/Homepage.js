/*
=========================================================
Name        : Homepage.js
Assignment  : 5
Author(s)   : Thalia Espinoza,  Brandon Nguyen
UCID        : 30195212, 30169800
Submission  : 04/08/2024
Description : homepage implementation 
=========================================================
*/

import React, { useEffect, useState } from 'react';
import Header from './Header';
import HomeMainSection from './HomeMainSection';
import Footer from './Footer';
import reviewsData from '../data/reviews'; 

const Homepage = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    
    const randomIndices = [];
    while (randomIndices.length < 2) {
      const randomIndex = Math.floor(Math.random() * reviewsData.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    const selectedReviews = randomIndices.map(index => reviewsData[index]);
    setRandomReviews(selectedReviews);
  }, []);

  return (
    <div>
      <Header />
      <HomeMainSection reviews={randomReviews} />
      <Footer />
    </div>
  );
};

export default Homepage;
