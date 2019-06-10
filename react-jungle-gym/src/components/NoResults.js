import React from 'react';
import styled from 'styled-components';

const NoResults = () => {
  return <Root>No results found</Root>;
};

export default NoResults;

const Root = styled.div`
  font-size: 2rem;
  text-align: center;
`;
