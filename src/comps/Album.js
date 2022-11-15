import React from 'react'
// import albumList from './listOfAlbums.js' 
import { useState } from 'react'
import { useEffect } from 'react';
import {getAlbums} from './api';
import {Link,useNavigate} from 'react-router-dom';



function Album() {

    const [album, setAlbum] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://jsonplaceholder.typicode.com/albums`).then((response)=>{
        response.json().then((res)=>{
                console.log(res);
                setAlbum(res);
        })
     })
            
            // console.log("Response",responseJson);

        };

                fetchData();
    }, []);

    // on clicking on the upload icon
    function uploadImage(id){

        console.log("Yay!! You did it!!",id);
        navigate(`/upload/${id}`);
    
    }

    
    return (
        <div>
            {console.log("Album",album)}
        
            { album.map( a => 
            <div className='album-row' key={a.id}>
                <div>
                <Link style = {{textDecoration:'none' , paddingLeft: "10px", textTransform: "capitalize", color:"#4e4e4e"}} 
                        to = {`/images/${a.id}`} 
                        key={a.id}>
                        {a.title}
                </Link>
                </div>

                <div className='button-util' onClick={() => uploadImage(a.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-upload" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <polyline points="7 9 12 4 17 9" />
                <line x1="12" y1="4" x2="12" y2="16" />
                </svg>
                </div>
            </div>
            ) }
        
        </div>
    )
}

export default Album;
