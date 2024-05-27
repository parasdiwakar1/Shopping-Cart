import React, { useEffect, useState } from 'react';
import Card from './Card';

function Datamain() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        // console.log(result);
        setData(result.products); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Card urldata={data} />
    </div>
  );
}

export default Datamain;
