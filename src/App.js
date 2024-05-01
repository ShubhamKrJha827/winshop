import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom'




function App() {
  return (
    <>
    <Navbar/>
    <main>
        <Outlet/>
      </main>
     <Footer/>
    
    </>
  );
}

export default App;
