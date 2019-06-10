import React from 'react';
import styled from 'styled-components';
import Emoji from '../Emoji';

const getStatusLabel = launchSuccess => {
  if (launchSuccess === null) {
    return 'Upcoming';
  }

  return launchSuccess ? 'Success' : 'Failed';
};

const getStatusIcon = launchSuccess => {
  if (launchSuccess === null) {
    return '📆';
  }

  return launchSuccess ? '🚀' : '🤯';
};

const LaunchRow = ({ launch, style }) => {
  return (
    <Root style={style}>
      <div>{launch.mission_name}</div>

      <div>{launch.rocket.rocket_name}</div>

      <div>{launch.launch_year}</div>

      <Emoji
        emoji={getStatusIcon(launch.launch_success)}
        label={getStatusLabel(launch.launch_success)}
      />
    </Root>
  );
};

export default LaunchRow;

const Root = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-items: center;
`;
