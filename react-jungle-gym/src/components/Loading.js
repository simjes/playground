import PropTypes from 'prop-types';
import React from 'react';
import ReactSVG from 'react-svg';
import styled from 'styled-components';
import LoadingAnimation from '../assets/Loading.svg';

const Loading = ({ text }) => {
  return (
    <Root>
      <ReactSVG src={LoadingAnimation} />

      <div>{text}</div>
    </Root>
  );
};

Loading.propTypes = {
  text: PropTypes.string,
};

export default Loading;
const Root = styled.div`
  text-align: center;
`;
