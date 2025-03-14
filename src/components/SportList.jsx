import React from 'react'
import SportCard from './SportCard';


const SportList = ({sports}) => {
  return (
    <div>
        {sports.map((sport , index) => (
            <SportCard key={index} sport={sport}/>
        
      ))}
    </div>
  )
}

export default SportList;