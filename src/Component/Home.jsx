import React from "react";
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Contact from './Contact'
import Services from "./Services";
import Projects from "./Projects";
import Contacts from "./Contact";
import Footer from "./footer";
import Technologies from "./Technologies";
function Home(){
    return(
        <>
        <Header/>
        <Hero/>
        <About/>
        <Technologies/>
        <Services/>
        <Projects/>
        <Contacts/>
        <Footer/>
        </>
    )
}
export default Home; 