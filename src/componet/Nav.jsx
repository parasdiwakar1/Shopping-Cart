import React, { useEffect, useState } from 'react';
import SearchData from './SearchData';
import { Addcarddata } from './Adddata';
import { useContext } from 'react';
function Nav( {setLogin, setForm,setSearchB}) {
  const { addbox, setAddbox,sdata,setSdata } = useContext(Addcarddata);
  const [add, setAdd] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [cardd,setCardd]=useState(false)
  const len=addbox.length
  const [logind,setLogind]=useState(false)
  useEffect(() => {
    const fetchData = async () => {
      if (search.trim()) {
        try {
          const response = await fetch(`https://dummyjson.com/products/search?q=${search}`);
          const result = await response.json();
          // console.log(result);
          setData(result.products);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [search]);

  const handleSearchChange = (e) => {
    setAdd(e.target.value);
    setSearch(add)
  };

  const handleSearchClick = () => {
    setSearch(add);
  };
  setSdata(data)
  const handlercard=()=>{
    setCardd(!cardd)
    
  }
  setLogin(cardd)
  const handlerlogin=()=> {
    setLogind(!logind)
  }
  setForm(logind)
  setSearchB(sdata)
  return (
    <>
      <div className='main-nav'>
        <h1 className='nav-h'>Shopping</h1>
        <div>
          <input
            onChange={handleSearchChange}
            value={add}
            className='search-input'
            type="text"
            placeholder='Search...'
          />
          <button className='search-btn' onClick={handleSearchClick}>Search</button>
        </div>
        <div>

        <button onClick={handlerlogin} className='nev-login'>Login</button>
        <button onClick={handlercard}  className='nev-login'>Card</button>
        </div>
      </div>
      <div>
      
      </div>
    </>
  );
}

export default Nav;
