import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../Data/Data'

const Description = () => {
    const params = useParams()
    console.log('params', params)

 const Result = data.find(movie => movie.title=== params.id);
     console.log(Result);
  return (
     

     <>
  
        
      <div className='tit'>{Result.title}</div>
      <div className='des'>
      {Result.description}
      <img className='pic' src={Result.img} alt=''/>
      </div>
     

      </>
    
    
  )
}

export default Description
