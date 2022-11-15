import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';


function UploadForm() {

    const params = useParams();
    let album_id = params.id;

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [lastid,setLastid] = useState(5);

    useEffect(() => {

        const actuallyFetchData = async () => {
            fetch(`https://jsonplaceholder.typicode.com/albums/${album_id}/photos`)
            .then((response)=>{
                        response.json().then(async (res)=>{
                        
                        setLastid(res.length+1);
                        console.log(lastid,"In first call");
                        actuallyUpdate();
                            
                        })
            }) 

        }

        actuallyFetchData();

    }, [])

    async function actuallyUpdate(){
        console.log(lastid,"In second call")
        // update the image array, this is a dummy call
        fetch(`https://jsonplaceholder.typicode.com/albums/${album_id}/photos`, {
            method: 'PUT',
            body: JSON.stringify({
                albumId: album_id,
                id: lastid,
                title: title,
                url: url,
                thumbnailUrl:"",
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));

        
    }

    async function uploadData(eve){

        // eve.preventDefault();
        
        // using id, get the image array, inturn getting the length of the array
        actuallyUpdate();

        alert("Uploaded Successfully!!!");
        
            


    }

    
    
    
    return (
        
        <form onSubmit={(eve) => uploadData(eve)}>
            
            <label htmlFor="title">ENTER TITLE</label>
            <input className='input-style' type='text' id="title" name='ENTER TITLE' onChange={(e) => setTitle(e.target.value) }/>  
            <label htmlFor="url">ENTER URL</label> 
            <input className='input-style' type='text' id="url" name='ENTER URL' onChange={(e) => setUrl(e.target.value) }/>
            <label htmlFor="submit">SUBMIT</label>
            <input className='submit-style' type='submit' id="submit" name='SUBMIT' />
            {/* <div className='output'>
                {err && <div className='error'>{err}</div>}
                {file && <div>{file.name}</div>}
            </div> */}
        </form>
    )
}

export default UploadForm
