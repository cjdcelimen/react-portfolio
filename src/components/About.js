import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import experience from './experience';
import styled from 'styled-components';

const AboutSection = styled.div`
  color: #f0edee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #2a3d45;
`

const AboutTitle = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
  letter-spacing: 2;

  @media screen and (max-width: 768px) {
      margin-top: 6rem;
  }
`

const AboutTitleH1 = styled.h1`
  letter-spacing: 0.3rem;
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
`

const JobInfoH3 = styled.h3`
  letter-spacing: 0.3rem;
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
`

const JobInfoH4 = styled.h4`
  color: #ff5a5f;
  letter-spacing: 0.3rem;
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
`

const JobCenter = styled.h4`
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 992px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;

  @media screen and (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const JobDate = styled.div`
  letter-spacing: 0.1rem;
  font-size: 1.2rem;
`
  
const JobDesc = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1rem;
  align-items: center;
`
  
const JobDescP = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
`

export const About = () => {
  const [jobs, setJobs] = useState(experience)
  const [value, setValue] = useState(0)
  const { title, duties, company, dates } = jobs[value]
  return (
    <>
      <AboutSection id='about'>
        <AboutTitle>
          <AboutTitleH1>Experience</AboutTitleH1>
        </AboutTitle>
        <JobCenter>
          <ButtonContainer>
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}
                >
                  {item.company}
                </button>
              )
            })}
          </ButtonContainer>
          <article className='job-info'>
            <JobInfoH3>{title}</JobInfoH3>
            <JobInfoH4>{company}</JobInfoH4>
            <JobDate>{dates}</JobDate>
            {duties.map((duty, index) => {
              return (
                <JobDesc key={index}>
                  <FaAngleDoubleRight />
                  <JobDescP>{duty}</JobDescP>
                </JobDesc>
              )
            })}
          </article>
        </JobCenter>
      </AboutSection>
    </>
  );
};