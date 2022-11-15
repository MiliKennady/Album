import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';

function Images() {
  const {id} =  useParams();

  const [images,setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then((response)=>{
    response.json().then((res)=>{
            console.log(res);
            setImages(res);
    })
 })
        
        // console.log("Response",responseJson);

    };

            fetchData();
}, []);

function actuallyDelete(image_id){
  // deleting from local state
  // duplicating the array
  const updatedImageList = images.filter(check_id);
  function check_id(image){
    return image.id!=image_id;
  }
  setImages(updatedImageList);
  // console.log(images);

  // dummy api call
  fetch(`https://jsonplaceholder.typicode.com/posts/{image_id}`, {
  method: 'DELETE',
});


  
}



  return (
    <div className='image-grid'>
      
      { images.map( i => 
      <div key={i.id} className='image'>

            <div >
              <img src={i.url} alt={i.title} key={i.id}></img>
            </div>
            <div className='delete' type='button' key={i.id} onClick={() => actuallyDelete(i.id)}>
              X
            </div >
                
      </div>      
            ) }
    </div>
  )
}

export default Images
