import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'


const Add = ({myRate,myImg,myTitle,handleAdd}) => {
    
  return (
    <div>
      <input placeholder='title' ref={myTitle}/>
      <input placeholder='img'  ref={myImg}/>
      <input type='number'    placeholder='rate' ref={myRate}/>
      <button  onClick={handleAdd}>add movie</button>
    </div>
  )
}

export default Add
