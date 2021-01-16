import React, { useState } from 'react';
import { About } from './About';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import { Projects } from './Projects';
import Sidebar from './Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    const openModal = () => {
        setShowModal(prev => !prev);
    }

    const openContact = () => {
        setShowContact(prev => !prev);
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} openContact={openContact} showContact={showContact} setShowContact={setShowContact} />
            <Navbar toggle={toggle} showModal={showModal} setShowModal={setShowModal} openModal={openModal} />
            <Hero />
            <About />
            <Projects />
            <Footer />
        </>
    )
}

export default Home