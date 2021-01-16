import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './ButtonScrollElement';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
    background: #f0edee;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #f0edee;
        z-index: 2;
    }
`

const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HeroH1 = styled(motion.h1)`
    color: #2a3d45;
    font-size: 3rem;
    text-align: center;
    letter-spacing: 0.3rem;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

const HeroP = styled(motion.p)`
    margin-top: 24px;
    color: #2a3d45;
    font-size: 1.5rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

const HeroBtnWrapper = styled(motion.div)`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
`

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroContent>
                <HeroH1
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.3 }}
                >Christopher Celimen</HeroH1>
                <HeroP
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.6 }}
                >Frontend Developer from Manila, PH</HeroP>
                <HeroBtnWrapper
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <Button
                        to="projects"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        activeClass='active'
                    >
                        See my work
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero