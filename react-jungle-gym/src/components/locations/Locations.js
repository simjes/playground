import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getLandingPads, getLaunchPads } from '../../state/location';
import LocationSection from './LocationSection';

class Locations extends Component {
  componentDidMount() {
    const {
      landingPads,
      launchPads,
      loadLandingPads,
      loadLaunchPads,
    } = this.props;

    if (!landingPads) {
      loadLandingPads();
    }

    if (!launchPads) {
      loadLaunchPads();
    }
  }

  render() {
    const {
      landingPads,
      launchPads,
      requestingLandingPads,
      requestingLaunchPads,
    } = this.props;

    return (
      <Root>
        <LocationSection
          locations={landingPads}
          title='Landing Pads'
          locationType='landings'
          isLoading={requestingLandingPads}
        />

        <LocationSection
          locations={launchPads}
          title='Launch Pads'
          locationType='launches'
          isLoading={requestingLaunchPads}
        />
      </Root>
    );
  }
}

const mapStateToProps = state => {
  return {
    landingPads: state.locations.landingPads,
    requestingLandingPads: state.locations.requestingLandingPads,
    launchPads: state.locations.launchPads,
    requestingLaunchPads: state.locations.requestingLaunchPads,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadLandingPads: () => dispatch(getLandingPads()),
    loadLaunchPads: () => dispatch(getLaunchPads()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Locations);

const Root = styled.div`
  > * {
    &:not(:first-child) {
      margin-top: 6rem;
    }
  }
`;
