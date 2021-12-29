import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let titly = "TextUtils";
  const [mode, setMode] = useState('light');

  const removeClasses = ()=> {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls) => {
    
    if (cls === null){

      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#202931';
        document.body.style.color = 'white';
        
      } else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        
      }
    }else{
      removeClasses();
    document.body.classList.add('bg-' +cls);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title={titly} mode={mode} toggleMode={toggleMode} />
         <Routes>
           <Route exact path="/" element={
              <div className="container my-3">
                <h2>Enter the text to Analyse below</h2>
                <TextForm mode={mode} />
              </div>
          } />
          <Route exact path='/about' element={<About mode= {mode}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
