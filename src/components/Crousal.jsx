import React from 'react'
import CrousalCard from './CrousalCard'
import Slider from "react-slick";
import './Crousal.css'


function Crousal() {
    var settings = {
        dots: true,
        
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        
        arrows:false,
        
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
        <div className='Crousal p-4 w-full pt-[80px]'> 
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
