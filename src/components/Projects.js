import React, {useState} from 'react';
import styled from 'styled-components';
import Project1 from '../images/ecommerce.png';
import Project2 from '../images/money.png';
import Project3 from '../images/breaking.png';
import { HiArrowRight } from 'react-icons/hi';

const ProjectsContainer = styled.div`
  padding: 4rem 0;
  min-height: 100vh;
`

const ProjectsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 676px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
  }
  @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
  }
`

const Project = styled.div`
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  color: #2a3d45;
  margin-bottom: 2rem;
  text-align: center;
  border-radius: 1rem;

  &:hover {
    transition: all 0.3s linear;
    transform: scale(1.03);
  }
`

const ProjectsTitle = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`

const ProjectsTitleH1 = styled.h1`
  letter-spacing: 0.3rem;
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
`

const ProjectImg = styled.img`
  width: 100%;
  height: 15rem;
  border-radius: 0.5rem 0.5rem 0 0;
`

const ProjectH2 = styled.h2`
  padding: 1rem;
  letter-spacing: 0.1rem;
  line-height: 1.25;
`

const ProjectP = styled.p`
  padding: 1rem;
  letter-spacing: 0.1rem;
  line-height: 1.5;
`

const ProjectSub = styled.h3`
  padding: 1rem;
  letter-spacing: 0.1rem;
`

const GoTo = styled(HiArrowRight)`
  margin-left: 16px;
  font-size: 30px;

  &:hover {
      color: #ff5a5f;
      transform: scale(1.5);
      transition: 0.3s;
  }
`

const ViewProject = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
  text-decoration: none;
  color: #2a3d45;
  }
`

export const Projects = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <>
      <ProjectsContainer id='projects'>
        <ProjectsTitle>
          <ProjectsTitleH1>Projects</ProjectsTitleH1>
        </ProjectsTitle>
        <ProjectsCenter>
          <Project>
            <ProjectImg src={Project1} alt="ecommerce" />
            <ProjectH2>eCommerce</ProjectH2>
            <ViewProject>
              <ProjectSub>View live project</ProjectSub>
              <a href="//cjdecommerce.netlify.app/" target="cjdecommerce" aria-label="cjdecommerce"><GoTo /></a>
            </ViewProject>
            <ProjectP>Powered with <span>Stripe, Commerce.js, and Material UI,</span> this functional ecommerce website allows you to modify your cart from a wide range of products with ease.</ProjectP>
          </Project>
          <Project>
            <ProjectImg src={Project2} alt="money" />
            <ProjectH2>money</ProjectH2>
            <ViewProject>
              <ProjectSub>View live project</ProjectSub>
              <a href="//cjdmoney.netlify.app/" target="cjdmoney" aria-label="cjdmoney"><GoTo /></a>
            </ViewProject>
            <ProjectP>A <span>smooth responsive</span> website for a very profitable stock investment company with the help of <span>react scroll</span>.</ProjectP>
          </Project>
          <Project>
            <ProjectImg src={Project3} alt="breaking" />
            <ProjectH2>Breaking Bad API</ProjectH2>
            <ViewProject>
              <ProjectSub>View live project</ProjectSub>
              <a href="//cjdbreakingbad.netlify.app/" target="cjdbreakingbad" aria-label="cjdbreakingbad"><GoTo /></a>
            </ViewProject>
            <ProjectP>Love science? Through <span>async await</span>, learn more about one of the best, if not the best, series of all time. Forget <span>knocking</span> before visiting the site, <span>Mr. White</span> will do that for you.</ProjectP>
          </Project>
        </ProjectsCenter>
      </ProjectsContainer>
    </>
  );
};