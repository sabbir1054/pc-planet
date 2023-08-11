import { Carousel } from 'antd';
import React from 'react';

const HeroSlider = () => {
      
    return (
      <div style={{ width: "100%" }}>
        <Carousel autoplay>
          <div>
            <img src="/assets/photo2.jpg" alt="" srcset="" width={`100%`}/>
          </div>
          <div>
            <img src="/assets/photo1.png" alt="" srcset="" width={`100%`}/>
          </div>
          <div>
            <img src="/assets/photo3.png" alt="" srcset="" width={`100%`}/>
          </div>
        </Carousel>
      </div>
    );
};

export default HeroSlider;