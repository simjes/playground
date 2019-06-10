import { format } from 'date-fns';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getNextLaunch } from '../state/launch';

class Home extends Component {
  componentDidMount() {
    const { nextLaunch, loadNextLaunch } = this.props;

    if (!nextLaunch) {
      loadNextLaunch();
    }
  }

  render() {
    const { nextLaunch, isLoading, isError } = this.props;

    return (
      <Root>
        {isLoading ? null : (
          <div>
            {nextLaunch ? (
              <>
                <Header>Next launch:</Header>
                <SubHeader>{nextLaunch.mission_name}</SubHeader>
                <SubHeader>
                  {format(nextLaunch.launch_date_utc, 'DD MMM YYYY')}
                </SubHeader>
              </>
            ) : isError ? (
              <p>CREATE ERROR COMPONENT</p>
            ) : (
              <Header>No scheduled launches</Header>
            )}
          </div>
        )}
      </Root>
    );
  }
}

const mapStateToProps = state => {
  return {
    nextLaunch: state.launches.next,
    isError: state.launches.errorNext,
    isLoading: state.launches.requestingNext,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadNextLaunch: () => dispatch(getNextLaunch()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

const Root = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  background: url('https://home.bt.com/images/4-aerospace-firms-that-could-rival-spacex-and-launch-humans-into-space-136424900977002601-180207175048.jpg')
    no-repeat;
  background-size: cover;
  height: 70vh;

  color: white;

  > div {
    background: ${props => props.theme.backgroundColor}aa;
    text-align: center;
    padding: 1rem;
  }
`;

const Header = styled.h1`
  margin: 0;
`;

const SubHeader = styled.h2`
  margin: 0;
  margin-top: 1rem;
`;
