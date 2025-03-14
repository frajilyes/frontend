import React, { useState } from 'react'
import SportList from '../components/SportList';
import Filtre from '../components/Filtre';
import AddForm from '../components/AddForm';


const Homepage = () => {
  const [sports, setsports]= useState([
  {title:"football"},
  {title:"basketball"},
  {title:"tennis"},
])
const [filtered, setfiltered]= useState(sports);
  return (
    <div>
      <SportList sports={sports}/>
      <AddForm
      setsports={setsports}
      setfiltered={setfiltered}
      sports={sports}/>
      <Filtre
      setfiltered={setfiltered}
      setsports={setsports}
      sports={sports}
      filtered={filtered}/>
    </div>
  )
}

export default Homepage;