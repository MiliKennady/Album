import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Albums from './comps/Album';
import Images from './comps/Images'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  console.log(location);
  return (
    <>
    <div className="App">
      
      <Title pathname={location.pathname}/>
      
      <Routes>
      
        <Route path='/' exact element={<Albums/>} />
        <Route path='/images/:id' element={<Images/>} />
        <Route path='/upload/:id' element={<UploadForm/>} />
      </Routes>
    </div>
    </>
    
    
  );
}

export default App;
