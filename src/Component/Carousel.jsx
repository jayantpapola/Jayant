import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// Tailwind CSS classes for styling

const Carousel = ({ items, speed, slidesToShow }) => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: speed || 3000,
  });

  return (
    <div className="mx-auto px-4 ">
      <Slider {...settings}>
        {items.map((e) => (
          <img
            src={e}
            className="h-[400px] object-contain scale-90 hover:scale-100 duration-200 shadow-lg"
          />
        ))}

        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
