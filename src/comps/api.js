const API_URL = process.env.REACT_APP_API_URL;

export const getAlbums = async () => {
     fetch(`https://localhost:7000/photos`).then((response)=>{
        response.json().then((res)=>{
                console.log(res);
        })
     })

    //console.log("I am here");

    // const responseJson = await response.json();

    // return res;
};