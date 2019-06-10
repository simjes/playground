import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import { getLaunches } from '../../state/launch';
import {
  filterFailedLaunches,
  filterLaunchesWithLandingIntent,
  filterLaunchesWithoutLandingIntent,
  filterSuccessfulLaunches,
} from '../../utils/launchUtils';
import Loading from '../Loading';
import LaunchList from './LauchList';
import LaunchPieChart from './LaunchPieChart';

class Launches extends Component {
  componentDidMount() {
    const { launches, loadLaunches } = this.props;

    if (!launches) {
      loadLaunches();
    }
  }

  launchSuccessAndFails = (launches, theme) => {
    return [
      {
        id: 'Success',
        label: 'Success',
        value: filterSuccessfulLaunches(launches).length,
        color: theme.successColor,
      },
      {
        id: 'Failed',
        label: 'Failed',
        value: filterFailedLaunches(launches).length,
        color: theme.failColor,
      },
    ];
  };

  launchesWithLandingIntent = (launches, theme) => {
    return [
      {
        id: 'Intent',
        label: 'Landing Intent',
        value: filterLaunchesWithLandingIntent(launches).length,
        color: theme.successColor,
      },
      {
        id: 'No Intent',
        label: 'No Landing Intent',
        value: filterLaunchesWithoutLandingIntent(launches).length,
        color: theme.failColor,
      },
    ];
  };

  render() {
    const { launches, theme, isLoading } = this.props;
    let successFailData = [];
    let landingIntentData = [];

    if (launches) {
      successFailData = this.launchSuccessAndFails(launches, theme);
      landingIntentData = this.launchesWithLandingIntent(launches, theme);
    }

    return (
      <Root>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Charts>
              <LaunchPieChart title='Launch Attempts' data={successFailData} />

              <LaunchPieChart title='Landing Intent' data={landingIntentData} />
            </Charts>

            {launches && <LaunchList launches={launches} />}
          </>
        )}
      </Root>
    );
  }
}

const mapStateToProps = state => {
  return {
    launches: state.launches.all,
    isLoading: state.launches.requestingAll,
    isError: state.launches.errorAll,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadLaunches: () => dispatch(getLaunches()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(Launches));

const Root = styled.section`
  margin-top: 30px;

  > * {
    &:not(:first-child) {
      margin-top: 50px;
    }
  }
`;

const Charts = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;

    > * {
      &:not(:first-child) {
        margin-top: 30px;
      }
    }
  }
`;
