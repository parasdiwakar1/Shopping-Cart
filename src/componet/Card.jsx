import React, { useEffect, useContext, useRef } from 'react';
import { Addcarddata } from './Adddata';

function Card({ urldata }) {
  const { addbox, setAddbox } = useContext(Addcarddata);
  const slideIndexRef = useRef(0);
  const slidesRef = useRef([]);

  useEffect(() => {
    const showSlides = () => {
      const slides = slidesRef.current;
      if (slides.length === 0) return;

      slides.forEach((slide, index) => {
        slide.style.display = index === slideIndexRef.current ? "block" : "none";
      });

      slideIndexRef.current = (slideIndexRef.current + 1) % slides.length;
      setTimeout(showSlides, 3000);
    };

    showSlides();
  }, []);

  const handlerADD = (id) => {
    const selectedProduct = urldata.find((item) => item.id === id);
    setAddbox((prevState) => ({
      ...prevState,
      addy: [...prevState.addy, selectedProduct],
    }));
  };


  return (
    <>
      <h1 className="main-s">
        <marquee>Shopping offer💥 offer🥳 offer🥳 Shopping</marquee>
      </h1>

      <div className="slideshow">
        {[
          "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Aman/May/5300-Kitchen---Summer-theme-hero-5_3000X1200_1._CB557363250_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/karigar/Karigar-PC-Hero_3000x1200_2X._CB557551341_.jpg",
          "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/MAY_CHANGES/3000X1200_Unicorn._CB557134975_.png",
          "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopHeroTemplate_3000x1200v3._CB592770274_.jpg",
        ].map((src, index) => (
          <div key={index} className="slide" ref={(el) => (slidesRef.current[index] = el)} style={{ display: 'none' }}>
            <img className="s" src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
        
      <div className="card-main">
        {urldata.map((value) => (
          <div key={value.id} className="card-box">
            <h1 className="card-title">{value.title}</h1>
            <h3 className="card-brandX">Brand: {value.brand}</h3>
            <img className="card-img" src={value.images[0]} alt={value.title} />
            <h3 className="card-descX">{value.description}</h3>
            <h2 className="card-price">Price: {value.price}</h2>
            <button onClick={() => handlerADD(value.id)} className="card-add">Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
