import React from 'react';
import styled from 'styled-components';
import Project1 from '../images/ecommerce.png';
import Project2 from '../images/money.png';
import Project3 from '../images/breaking.png';

const ProjectsContainer = styled.div`
  padding: 4rem 0;

  @media screen and (min-width: 676px) {
      height: 100vh;
  }
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
  background-color: #2a3d45;
  color: #f0edee;
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

const ProjectH4 = styled.h4`
  padding: 1rem;
  letter-spacing: 0.1rem;
  line-height: 1.25;
`

const ProjectP = styled.p`
  padding: 1rem;
  letter-spacing: 0.1rem;
`

export const Projects = () => {

  return (
    <>
      <ProjectsContainer id='projects'>
        <ProjectsTitle>
          <ProjectsTitleH1>Projects</ProjectsTitleH1>
        </ProjectsTitle>
        <ProjectsCenter>
          <Project>
            <ProjectImg src={Project1} alt="ecommerce" />
            <ProjectH4>eCommerce</ProjectH4>
            <ProjectP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore tempore veniam debitis blanditiis! Animi atque recusandae illo itaque perferendis.</ProjectP>
          </Project>
          <Project>
            <ProjectImg src={Project2} alt="money" />
            <ProjectH4>money</ProjectH4>
            <ProjectP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis magni consectetur veniam, dignissimos sunt nesciunt labore maxime earum! Distinctio eligendi autem non voluptate adipisci eum ab, rerum facere aperiam.</ProjectP>
          </Project>
          <Project>
            <ProjectImg src={Project3} alt="breaking" />
            <ProjectH4>Breaking Bad API</ProjectH4>
            <ProjectP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, voluptatibus.</ProjectP>
          </Project>
        </ProjectsCenter>
      </ProjectsContainer>
    </>
  );
};