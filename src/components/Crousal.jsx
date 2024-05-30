import React from 'react'
import CrousalCard from './CrousalCard'
import Slider from "react-slick";
import './Crousal.css'


function Crousal() {
    var settings = {
        dots: true,
        
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        
        
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
        
    };

    return (
        <div className='Crousal p-4 w-full'> 
            <Slider {...settings} className="custom-slider" >
                <CrousalCard />
                <CrousalCard />
                <CrousalCard />
                <CrousalCard />
                <CrousalCard />
                <CrousalCard />
            </Slider>
        </div>
    );
}

export default Crousal