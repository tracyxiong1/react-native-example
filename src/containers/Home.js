import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as routeActions from '../actions/route';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

@connect(
  state => state,
  dispatch => bindActionCreators(routeActions, dispatch),
)
export default class Home extends Component {
  static propTypes = {
    push: PropTypes.func.isRequired,
  };

  toCounter = () => {
    const { push } = this.props;
    push('counter');
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon.Button name="calculator" backgroundColor="#3b5998" onPress={this.toCounter}>
          Navigate to Counter
        </Icon.Button>
      </View>
    );
  }
}
