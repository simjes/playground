import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatHighlighter = ({ stat, title, subTitle }) => {
  return (
    <Root>
      <Stat>{stat}</Stat>

      <Title>{title}</Title>

      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Root>
  );
};

StatHighlighter.propTypes = {
  stat: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default StatHighlighter;

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Stat = styled.div`
  font-size: 3rem;
`;

const Title = styled.div`
  font-size: 1.6rem;
`;

const SubTitle = styled.div`
  font-size: 1.2rem;
`;
