import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const slideImages = [
      'https://media.gucci.com/content/HeroRegularMedium_1536x772/1619619306/HeroRegularMedium_OUVERTURE-21-082_001_Default.jpg',
      'https://media.gucci.com/content/HeroBigStandard_3200x1520/1621243804/HeroBigStandard_OUVERTURE-21-044_001_Default.jpg',
      'https://ounass-prod.atgcdn.ae/contentful/b3xlytuyfm3e/2pNDCdoG7QRLk2SInBJpid/57562e01007eb3202f1f16f809e1f0e8/WW_Trending3_Shoes_Bags_Web_En_WK20.jpg?fm=webp&q=75'
    ];

export default function Carousels () {
      return (
        <Carousel fade >
        <Carousel.Item>
        {/* {slideImages.map(ele => <div className="d-block w-100">
            <div style={{'backgroundImage': `url(${ele})`}}>
            </div>
          </div> )} */}

          <img
            className="d-block w-100" 
            src="https://media.gucci.com/content/HeroBigStandard_3200x1520/1621243804/HeroBigStandard_OUVERTURE-21-044_001_Default.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>BUY. SELL.</h3>
            <p>Designer. Preloved. Vintage. Streetwear. Sneakers.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src="https://media.gucci.com/content/HeroBigStandard_3200x1520/1621243804/HeroBigStandard_OUVERTURE-21-044_001_Default.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>DISCOVER UNIQUE FASHION</h3>
            <p>Discover independent brands making waves and the creators behind them. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src="https://ounass-prod.atgcdn.ae/contentful/b3xlytuyfm3e/2pNDCdoG7QRLk2SInBJpid/57562e01007eb3202f1f16f809e1f0e8/WW_Trending3_Shoes_Bags_Web_En_WK20.jpg?fm=webp&q=75"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
       
      )
  }