import React from 'react'
import { useParams } from 'react-router-dom';

const Userpage = () => {
    const params = useParams ();
    console.log(params);
  return (
    <div>Userpage</div>
  )
}

export default Userpage;