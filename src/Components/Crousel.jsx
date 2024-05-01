import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Crousel() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:'80vh', }}
          className="d-block w-100"
          src="https://cdn.create.vista.com/api/media/medium/11906155/stock-photo-in-the-store?token="
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'80vh', }}
          className="d-block w-100"
          src="https://cdn.create.vista.com/api/media/medium/83116946/stock-photo-bottle-of-red-wine-and-two-glasses-in-wine-shop?token="
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'80vh', }}
          className="d-block w-100"
          src="https://cdn.create.vista.com/api/media/medium/83116638/stock-photo-asian-couple-drinking-red-wine?token="
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'80vh', }}
          className="d-block w-100"
          src="https://cdn.create.vista.com/api/media/medium/442176358/stock-photo-woman-medical-mask-taking-wine-bottle-blurred-foreground-supermarket?token="
          alt="forth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'80vh', }}
          className="d-block w-100"
          src="https://cdn.create.vista.com/api/media/medium/188870738/stock-photo-side-view-shop-assistants-arranging-bottles-wine-hypermarket?token="
          alt="fifth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Crousel
