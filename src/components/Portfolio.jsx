import React from 'react';
import PortfolioItem from './PortfolioItem';
import codeRefactorImg from '../assets/images/code-refactor.png';
import passwordGeneratorImg from '../assets/images/password-generator.png';
import codeQuizImg from '../assets/images/code-quiz.png';
import workDaySchedulerImg from '../assets/images/work-day-scheduler.png';
import weatherDashboardImg from '../assets/images/weather-dashboard.png';
import codingTheCosmosImg from '../assets/images/coding-the-cosmos.png';
import teamProfileGeneratorImg from '../assets/images/team-profile-generator.png';
import noteTakerImg from '../assets/images/note-taker.png';
import weatherOrNotImg from '../assets/images/weather-or-not.png';
import gradient3 from '../assets/images/gradient3.jpg';

const Portfolio = () => {
  return (
    <div id='about' className=''>
      <img
        className='w-full h-screen object-cover object-center'
        src={gradient3} //!!!
        alt='A colorful gradient background photo.'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div
          id='portfolio'
          className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'
        >
          <h1 className='py-4 text-6xl mb-6 font-bold text-center text-[#001B5E]'>
            Portfolio
          </h1>
          <div className='grid sm:grid-cols-3 gap-12'>
            <div>
              <PortfolioItem
                img={codeRefactorImg}
                title='Code Refactor'
                url='https://github.com/davidmichaelmackey/code-refactor'
              />
            </div>
            <div>
              <PortfolioItem
                img={passwordGeneratorImg}
                title='Password Generator'
                url='https://github.com/davidmichaelmackey/password-generator'
              />
            </div>
            <div>
              <PortfolioItem
                img={codeQuizImg}
                title='Code Quiz'
                url='https://github.com/davidmichaelmackey/code-quiz'
              />
            </div>
            <div>
              <PortfolioItem
                img={workDaySchedulerImg}
                title='Work Day Scheduler'
                url='https://github.com/davidmichaelmackey/work-day-scheduler'
              />
            </div>
            <div>
              <PortfolioItem
                img={weatherDashboardImg}
                title='Weather Dashboard'
                url='https://github.com/davidmichaelmackey/weather-dashboard'
              />
            </div>
            <div>
              <PortfolioItem
                img={codingTheCosmosImg}
                title='Coding The Cosmos'
                url='https://github.com/davidmichaelmackey/coding-the-cosmos'
              />
            </div>
            <div>
              <PortfolioItem
                img={teamProfileGeneratorImg}
                title='Team Profile Generator'
                url='https://github.com/davidmichaelmackey/team-profile-generator'
              />
            </div>
            <div>
              <PortfolioItem
                img={noteTakerImg}
                title='Note Taker'
                url='https://github.com/davidmichaelmackey/note-taker'
              />
            </div>
            <div>
              <PortfolioItem
                img={weatherOrNotImg}
                title='Weather Or Not'
                url='https://github.com/davidmichaelmackey/weather-or-not'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
