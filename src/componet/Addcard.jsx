import React, { useContext, useState } from 'react';
import { Addcarddata } from './Adddata';

function Addcard() {
  const { addbox, setAddbox } = useContext(Addcarddata);
  const [quantities, setQuantities] = useState({});

  const handleRemove = (id) => {
    setAddbox((prevState) => ({
      ...prevState,
      addy: prevState.addy.filter((item) => item.id !== id),
    }));
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1),
    }));
  };
  console.log(addbox)

  return (

    <div className="card-mainA">
      <img 
    className="main-img-x" 
    src="https://www.jiomart.com/images/category/2/groceries-20230228.jpeg" 
    alt="Main category"
  />
 
   

{/* {addbox.length === 0 && (
  <img
    className="main-img-x"
    src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
    alt="Main category"
  />
)} */}
      {addbox.addy.map((value) => {
        const quantity = quantities[value.id] || 1;
        return (
          <div key={value.id} className="card-boxA">
            <h1 className="card-title">{value.title}</h1>
            <h3 className="card-brand">Brand: {value.brand}</h3>
            <div>
            <img className="card-img" src={value.images[0]} alt={value.title} />
            <div>
            <h3 className="card-desc">{value.description}</h3>
            <h2 className="card-price">Price: Rs {value.price}</h2>
            </div>
            </div>
            <div className='addQ'>
            <button className='dicriment' onClick={() =>handleDecrement(value.id)}>-</button>
            <p className='padd'>{quantity}</p>
            <button className='incrment' onClick={() => handleIncrement(value.id)}>+</button>
            </div>
            <hr />
            <h2>Price Details</h2>
            
              
            <p className='price'>Price :  Rs {value.price * quantity}</p>
           <p className='price'>Discount:  %35</p> 
           <h4 className='price'> Delivery Charges :  Rs 40</h4>
            <hr />
              <h3 className='price'> Total Amount  Rs {value.price * quantity - 10 +40}</h3>
           
            <button onClick={() => handleRemove(value.id)} className="Remove">Remove</button>
          </div>
        );
      })}

<div className='main-y-div'>
  <img
    className="main-img-y"
    src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
    alt="Main category"
  />

  </div>
    </div>
  );
}

export default Addcard;
