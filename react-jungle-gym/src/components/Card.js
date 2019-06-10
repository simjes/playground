import React from 'react';
import styled from 'styled-components';

const Card = props => {
  return <Root>{props.children}</Root>;
};

export default Card;

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  background: ${props => props.theme.foregroundColor};
  color: ${props => props.theme.primaryTextColor};
  box-shadow: ${props => props.theme.boxShadow};
`;
