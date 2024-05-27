import React, { useContext } from 'react';
import { Addcarddata } from './Adddata';

function SearchData() {
  const { addbox, setAddbox, sdata, setSdata } = useContext(Addcarddata);

  const handlerADD = (id) => {
    const selectedProduct = sdata.find((item) => item.id === id);
    setAddbox((prevState) => ({
      ...prevState,
      addy: [...prevState.addy,selectedProduct],
    }));
  };
 
  return (
    <div>
       <img class="main-img-x" src="https://www.jiomart.com/images/category/2/groceries-20230228.jpeg" alt=""></img>
      <div className="card-mains">
        {sdata.map((value) => (
          <div key={value.id} className="card-boxs">
            <img className="card-img" src={value.images[0]} alt={value.title} />
            <div>
            <h1 className="card-title">{value.title}</h1>
            <h3 className="card-brand">Brand: {value.brand}</h3>
            <h3 className="card-desc">{value.description}</h3>
            <h2 className="card-price">Price: {value.price}</h2>
            <button onClick={() => handlerADD(value.id)} className="card-add">Add to Cart</button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchData;
