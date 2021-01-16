import React, { useState } from 'react';
import { About } from './About';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import { Projects } from './Projects';
import Sidebar from './Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <About />
            <Projects />
            <Footer />
        </>
    )
}

export default Home