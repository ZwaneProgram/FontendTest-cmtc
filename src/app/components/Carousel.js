'use client';
import React, { useState } from "react";
import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
    image: '/1.jpg',
    caption: "Caption",
    description: "Description Here"
  },
  {
    image: '/2.jpg',
    caption: "Caption",
    description: "Description Here"
  },
  {
    image: '/Card1.jpg',
    caption: "Caption",
    description: "Description Here"
  }
];

function TheCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => (
        <Carousel.Item key={i}>
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image
              className="d-block w-100"
              src={slide.image}
              alt="slider image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default TheCarousel;
