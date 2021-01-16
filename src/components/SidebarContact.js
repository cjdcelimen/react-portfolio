import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si';

const ContactContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`

const ModalContainer = styled.div`
  position: relative;
  margin: 5rem auto;
  width: 100%;
  height: 800px;
  background: white;
  display: flex;

  @media (max-width: 980px){
    display: grid;
  }

  @media screen and (max-width: 768px) {
      margin: 0;
      width: 100%;
  }
`

const PanelOne = styled.div`
    padding: 48px;
    background-color: #f0edee;
    color: #2a3d45;
    width: 100%;

  @media screen and (max-width: 540px) {
      display: none;
  }
`

const PanelTwo = styled.div`
  padding: 48px;
  background-color: #2a3d45;
  color: #f0edee;
  width: 100%;

  @media screen and (max-width: 540px) {
    padding: 16px;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 280px) {
    padding: 0;
  }
`

const Close = styled(FaTimes)`
  position: absolute;
  right: 0;
  font-size: 48px;
  padding-right: 16px;
  padding-top: 16px;
  color: #ff5a5f;

  &:hover {
      transform: scale(1.3);
      transition: 0.3s
  }
`

const AboutH2 = styled.h2`
  padding: 1rem;
  letter-spacing: 0.1rem;
  line-height: 1.25;
  font-size: 30px;
`

const AboutP = styled.p`
  padding: 1rem;
  letter-spacing: 0.1rem;
  line-height: 1.5;
  align-items: center;
  font-size: 20px;
`

const AboutSub = styled.h3`
  padding: 1rem;
  letter-spacing: 0.1rem;
  font-size: 20px;
`

const AboutIcons = styled.div`
  padding: 1rem;
  font-size: 48px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 280px) {
    font-size: 32px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

const AboutHtml = styled(SiHtml5)`
  &:hover {
    transform: scale(1.3);
    transition: 0.2s ease-in-out;
    color: #ff5a5f;
  }
`

const AboutCss = styled(SiCss3)`
  &:hover {
    transform: scale(1.3);
    transition: 0.2s ease-in-out;
    color: #ff5a5f;
  }
`

const AboutJs = styled(SiJavascript)`
  &:hover {
    transform: scale(1.3);
    transition: 0.2s ease-in-out;
    color: #ff5a5f;
  }
`

const AboutReact = styled(SiReact)`
  &:hover {
    transform: scale(1.3);
    transition: 0.2s ease-in-out;
    color: #ff5a5f;
  }
`

const SidebarContact = ({showContact, setShowContact}) => {
  return (
      <>
          {showContact && (
              <ContactContainer>
                  <ModalContainer>
                      <PanelOne>
                          <AboutH2>Some Nuggets.</AboutH2>
                          <AboutSub>Frontend Developer</AboutSub>
                          <AboutP>I'm CJ, a licensed Electronics Engineer from <span>Mapua Institute of Technology</span> turned frontend developer with the <span>goal</span> to become a full stack developer. <span>Appreciation of design and technology</span> to build <span>valuable applications</span> is why I pursued this path.</AboutP>
                      </PanelOne>
                      <PanelTwo>
                          <AboutH2>Reach Out.</AboutH2>
                          <AboutSub>Kindly send me an email</AboutSub>
                          <AboutP>Hello visitor! Thank you for viewing my portfolio website. If you have any question or inquiry, feel free to reach me at <span>cjdcelimen@gmail.com</span></AboutP>
                          <AboutIcons>
                              <AboutHtml />
                              <AboutCss />
                              <AboutJs />
                              <AboutReact />
                          </AboutIcons>
                      </PanelTwo>
                      <Close onClick={() => setShowContact(false)} />
                  </ModalContainer>
              </ContactContainer>
          )}
      </>
  )
}

export default SidebarContact