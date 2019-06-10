import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import styled from 'styled-components';

const LaunchPieChart = ({ title, data }) => {
  return (
    <Root>
      <Title>{title}</Title>

      <ChartContainer>
        <ResponsivePie
          data={data}
          innerRadius={0.55}
          padAngle={1}
          cornerRadius={3}
          colorBy={d => d.color}
          radialLabelsTextColor='#ffffff'
          radialLabelsLinkColor='#ffffff'
          isInteractive={false}
        />
      </ChartContainer>
    </Root>
  );
};

export default LaunchPieChart;

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: inherit;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const ChartContainer = styled.div`
  height: 25rem;
  width: 100%;

  @media (max-width: 768px) {
    height: 20rem;
  }
`;
