import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import MyFace from "./components/MyFace";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Frameworks from "./components/Frameworks";
import Footer from "./components/Footer";
// AOS effect
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

function App() {
  useEffect(() =>{
    Aos.init({duration: 1500,})
  }, []);
    document.title = "Tran Nam Son";
  return (
    <div>
      <div className=" h-screen">
        <Navbar />
        <Profile />
      </div>
      <MyFace />
      <Skills />
      <Frameworks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
