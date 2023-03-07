import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import BackgroundSlideshow from 'react-background-slideshow'
import Navbar from "../NavBar";
import image1 from '../burger2.jpg'
import image2 from '../kitchen.jpg'
import image3 from '../burger5.jpg'
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../App.css'

const images = [
    {url: image1, text: 'Need a juicy burger?'},
    {url: image2, text: "Get a good scrubbin'"},
    {url: image3, text: "Need a juicy burger?"}
];



const Home = () => {
    return (
      <div>
        <Fade autoplay infinite duration={5000}>
          {images.map((fadeImage, index) => (
            <div key={index}>
              <div style={{ height: '100vh',
                            backgroundImage: `url(${fadeImage.url})`,
                            width: '100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                            }}>
                <Navbar />
                <span>{fadeImage.text}</span>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    )
}

export default Home;