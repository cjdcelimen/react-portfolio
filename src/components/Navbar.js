import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import Contact from './Contact';

const Nav = styled(motion.nav)`
    background: #f0edee;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

const NavbarLogo = styled(LinkR)`
    color: #2A3D45;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        transform: scale(1.1);
        transition: 0.2s ease-in-out;
        color: #ff5a5f;
    }
`

const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display:  block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #2A3D45;
    }
`

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavItem = styled.li`
    height: 80px;
`

const NavLinks = styled(LinkS)`
    color: #2A3D45;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 2px solid #ff5a5f;
    }

    &:hover {
        transform: scale(1.1);
        transition: 0.2s ease-in-out;
        color: #ff5a5f;
        border-bottom: 2px solid #ff5a5f;
    }
`

const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavContact = styled.button`
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    border-radius: 50px;
    background: #2A3D45;
    white-space: nowrap;
    padding: 10px 22px;
    color: #FFF;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ff5a5f;
        color: #f0edee;
        transform: scale(1.1);
    }
`

const Navbar = ({ toggle, showModal, setShowModal, openModal }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav
                scrollNav={scrollNav}
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 150 }}
            >
                <NavbarContainer>
                    <NavbarLogo to='/' onClick={toggleHome}>cjdc</NavbarLogo>
                    <MobileIcon onClick={toggle}>
                        <FaAlignRight />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                            >Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass='active'
                            >Projects</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavContact onClick={openModal}>Contact</NavContact>
                        <Contact showModal={showModal} setShowModal={setShowModal}/>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar