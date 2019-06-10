import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Loading from '../Loading';
import NoResults from '../NoResults';
import LocationCard from './LocationCard';

const LocationSection = ({ locations, title, locationType, isLoading }) => {
  return (
    <Root>
      <Header>{title}</Header>

      {isLoading ? (
        <Loading />
      ) : locations && locations.length ? (
        <CardContainer>
          {locations.map(location => (
            <LocationCard
              key={location.id}
              title={location.fullName}
              status={location.status}
              numberOfSuccesses={location.numberOfSuccesses}
              numberOfAttempts={location.numberOfAttempts}
              locationType={locationType}
            />
          ))}
        </CardContainer>
      ) : (
        <NoResults />
      )}
    </Root>
  );
};

LocationSection.propTypes = {
  title: PropTypes.string.isRequired,
  locations: PropTypes.array,
  locationType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LocationSection;

const Root = styled.div`
  min-height: 40rem;
`;

const Header = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
