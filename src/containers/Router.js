import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';

import Main from './Main';
import Counter from './Counter';

const { CardStack } = NavigationExperimental;

@connect(
  state => state,
)
export default class Router extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
  };

  renderScene = (props) => {
    switch (props.scene.key) {
      case 'scene_main':
        return <Main />;
      case 'scene_counter':
        return <Counter />;
      default:
        return null;
    }
  }

  render() {
    return (
      <CardStack
        direction="horizontal"
        navigationState={this.props.routes}
        renderScene={this.renderScene}
      />
    );
  }
}
