import React from 'react';
import logo from './logo.svg';
import Head from './header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Head/>
      <div className="App-header">
   
       
      <h1>Edwin Muliro.</h1>
      <span><u><a href="/">I convert codes into a real world.</a></u></span>
      <div className="services">
        <div className="services-details">
          <h2>projects</h2>
        </div>
        <div className="services-details">
          <h2>Resume</h2>
        </div>
        <div className="services-details">
          <h2>Skill</h2>
        </div>
      </div>
      </div>
    
      <Footer/>
    </div>
  );
}

export default App;
