import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {Link, BrowserRouter as Router, Routes , Route,Navigate} from 'react-router-dom';
import Counter from "./components/Counter"
import Home from "./components/Home";
import Testing from "./components/Testing"
import Main from "./components/Main"
import Destinations from "./components/Destinations";
import About from "./components/About";
import TourPage1 from "./components/TourPage1";
import TourPage2 from "./components/TourPage2";
import TourPage3 from "./components/TourPage3";
// import { Container } from "postcss";
import Video from "./components/Video";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Container from "./components/Container";
import Tour from "./components/Tour";
import Footer from "./components/Footer";
import Landing from "./components/Pages/Landing";

function App() {
  return (
    <>
  
     
      {/* <Link to='/Testing'> test link here</Link> */}
       
        <Router>
        {/* <Navbar />
        <Home />
        <Destinations />
        <Container />
        <Tour />
        <About />
        <Video />
        <Review />
        <Counter/>
        <Contact />
        <Footer /> */}
        {/* <Main/> */}
        {/* <Testing/> */}
        <Routes>
          <Route exact path="/" index element={<Main/>} />
          {/* <Route path="/redeirect"  element={<Navigate to ="/NewComponent"/>} /> */}
        <Route exact path="/TourPage1" element={<TourPage1/>}/>
        <Route exact path="/TourPage2" element={<TourPage2/>}/>
        <Route exact path="/TourPage3" element={<TourPage3/>}/>

        </Routes>
      </Router>
       
       
    </>
  );
}

export default App;
