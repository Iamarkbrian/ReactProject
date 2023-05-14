import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '100%',
  width: '100%',
  backgroundColor: 'gray',
  padding: '10px',
  borderRadius: '5px',
  textAlign: 'center',

};

const imageStyle = {
  height: '100%',
  width: '100%',
  objectFit: 'cover', // set this to "cover" to make the image fill the entire container
};

function Home() {
  return (
    <div className="heroBlock" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <Carousel autoplay>
        <div>
        <h3 style={contentStyle}>
      <img style={imageStyle} src="/pictures/HeroCarous.jpg" alt="Some images" />
      </h3>
        </div>
        <div>
          <img style={imageStyle} src="/pictures/FortheheroCarousel.jpg" alt="Sunset over mountains"/>
        </div>
        <div>
          <img style={imageStyle} src="/pictures/Herocarouselpictttt.jpg" alt="Close-up of flower petals"/>
        </div>
        <div>
          <img style={imageStyle} src="/pictures/Herocarouselpictttt.jpg" alt="City skyline at night"/>
        </div>
        <div>
          <img style={imageStyle} src="/pictures/Herocarouselpictttt.jpg" alt="Fruit stand at farmer's market"/>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;