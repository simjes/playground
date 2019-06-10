import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import Emoji from '../Emoji';
import StatHighlighter from '../StatHighlighter';

const getStatusSymbol = status => {
  switch (status) {
    case 'active':
      return '🚀';

    case 'retired':
      return '👵';

    case 'under construction':
      return '👷‍♀️';

    default:
      return '🦄';
  }
};

const LocationCard = ({
  title,
  status,
  numberOfSuccesses,
  numberOfAttempts,
  locationType,
}) => {
  const statusIcon = getStatusSymbol(status);

  return (
    <Card>
      <Tilte>{title}</Tilte>

      <Content>
        <StatHighlighter
          stat={`${numberOfSuccesses}`}
          title='Successful'
          subTitle={locationType}
        />

        <StatHighlighter
          stat={`${numberOfAttempts}`}
          title='Attempted'
          subTitle={locationType}
        />
      </Content>

      <Footer>
        <Emoji emoji={statusIcon} label={status} />
      </Footer>
    </Card>
  );
};

LocationCard.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  numberOfAttempts: PropTypes.number.isRequired,
  numberOfSuccesses: PropTypes.number.isRequired,
  locationType: PropTypes.string.isRequired,
};

export default LocationCard;

const Tilte = styled.div`
  font-size: 2.6rem;
  text-align: center;
`;

const Content = styled.div`
  margin-top: 1rem;

  > div {
    text-align: center;
    margin-top: 1.5rem;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  margin-top: 3rem;
  font-size: 3rem;
`;
