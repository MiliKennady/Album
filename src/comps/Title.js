import React from 'react';
import { useNavigate } from 'react-router-dom';

const Title = ({pathname}) => {
  let navigate = useNavigate();
  return (
    <div className="title">
      {pathname!='/'?
      <button onClick={() => navigate(-1)} className='submit-style' style={{width:"100px"}}>Go Back</button>:
      ""}
      
      <h2>My Photo Dump</h2>
      <p>Memories bring back, Memories bring back you</p>
    </div>
  )
}

export default Title;