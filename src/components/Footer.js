import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const FooterContainer = styled.footer`
    background-color: #2a3d45;
`

const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

const SocialLogo = styled(Link)`
    color: #f0edee;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    &:hover {
        color: #ff5a5f;
    }
`

const WebsiteRights = styled.small`
    color: #f0edee;
    margin-bottom: 16px;
`

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

const SocialIconLink = styled.a`
    color: #f0edee;
    font-size: 24px;

    &:hover {
        color: #ff5a5f;
    }
`

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>cjdc</SocialLogo>
                            <WebsiteRights>© {new Date().getFullYear()} Christopher Celimen</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="//www.facebook.com/" target="facebook" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="//www.instagram.com/" target="instagram" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="//www.youtube.com/" target="youtube" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href="//www.twitter.com/" target="twitter" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="//www.linkedin.com/" target="linkedin" aria-label="Linkedin">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer