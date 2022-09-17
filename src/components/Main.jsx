import React from 'react'
// import "./App.css";
import Navbar from "./Navbar";
import {Link, BrowserRouter as Router, Routes , Route,Navigate} from 'react-router-dom';
import Counter from "./Counter"
import Home from "./Home";
// import Testing from "./components/Testing"
import Destinations from "./Destinations";
import About from "./About";
// import NewComponent from "./components/NewComponent";
// import { Container } from "postcss";
import Video from "./Video"
import Review from "./Review";
import Contact from "./Contact";
import Container from "./Container";
import Tour from "./Tour";
import Footer from "./Footer";
// import Landing from "./components/Pages/Landing";

function Main() {
  return (
    <div>
         <Navbar />
        <Home />
        <Destinations />
        <Container />
        <Tour />
        <About />
        <Video />
        <Review />
        <Counter/>
        <Contact />
        <Footer />
    </div>
  )
}

export default Main