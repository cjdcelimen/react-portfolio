import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import SidebarContact from './SidebarContact';

const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 50%;
    background: #2a3d45;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

const CloseIcon = styled(FaTimes)`
    color: #f0edee;

    &:hover {
        color: #ff5A5f;
        transform: scale(1.3);
        transition: 0.2s ease-in-out;
    }
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const SidebarWrapper = styled.div`
    color: #2a3d45;
`

const SidebarMenu = styled.ul`
    padding-top: 48px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #f0edee;
    cursor: pointer;

    &:hover {
        color: #ff5a5f;
        transition: 0.2s ease-in-out;
        transform: scale(1.3);
    }
`

const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavContact = styled.button`
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    border-radius: 50px;
    background: #f0edee;
    white-space: nowrap;
    padding: 10px 22px;
    color: #2a3d45;
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
        transform: scale(1.3);
    }
`

const Sidebar = ({ isOpen, toggle, showContact, setShowContact, openContact }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Experience
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <NavBtn>
                        <NavContact onClick={openContact}>Contact</NavContact>
                        <SidebarContact showContact={showContact} setShowContact={setShowContact}/>
                    </NavBtn>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar