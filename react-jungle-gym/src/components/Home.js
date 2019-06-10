import React from 'react';
import Jumbo from './Jumbo';
import Launches from './launches/Launches';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Playground>
        <p>
          This is the jungle gym in the{' '}
          <Link
            href='https://github.com/simjes/playground'
            title='https://github.com/simjes/playground'
            target='_blank'
            rel='noopener noreferrer'
          >
            playground
          </Link>
        </p>

        <p>
          The playground is a repository for creating small and simple
          applications to test out new technologies and frameworks
        </p>

        <p>
          Created by{' '}
          <Link
            href='https://simjes.dev'
            title='https://simjes.dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            simjes
          </Link>
        </p>
      </Playground>
      <Jumbo />
      <Launches />
    </>
  );
};

export default Home;

const Playground = styled.div`
  text-align: center;
  font-size: 2rem;
`;

const Link = styled.a`
  color: ${props => props.theme.secondaryColor};
`;
