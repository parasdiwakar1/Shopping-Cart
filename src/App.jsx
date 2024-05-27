import React, { useEffect, useState } from 'react'
import "./App.css"
import Nav from './componet/Nav'
import Datamain from './componet/Datamain'
import Adddata from './componet/Adddata'
import SearchData from './componet/SearchData'
import Addcard from './componet/Addcard'
import Form from './componet/Form'
import FooterX from './componet/FooterX'


function App() {
  const[login,setLogin]=useState(null);
  const[form,setForm]=useState(null)
  const[searchB,setSearchB]=useState([])
  const [datalogin,setDatalogin]=useState(false);
  console.log(searchB.length)
  
  return (
    <>
    <Adddata>
      {form && <Form setDatalogin={setDatalogin}/> }
      <Nav setLogin={setLogin} setForm={setForm} setSearchB={setSearchB} />
      { searchB.length==0 ||searchB.length==30? (
        login ? <Addcard /> : <Datamain />
      ) : (
        login ? <Addcard /> : <SearchData />
        
      )}
  
    </Adddata>

    <FooterX/>
      </>
  )
}

export default App