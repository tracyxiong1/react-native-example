import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';
import * as RouteActions from '../actions/route';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

@connect(
  state => ({
    counter: state.counter,
  }),
  dispatch => bindActionCreators(Object.assign({}, CounterActions, RouteActions), dispatch),
)
export default class CounterContainer extends Component {
  static propTypes = {
    back: PropTypes.func.isRequired,
  };

  handleBack = () => {
    const { back } = this.props;
    back();
  }

  render() {
    return (
      <View style={styles.container}>
        <Counter {...this.props} />
        <Icon.Button name="backward" backgroundColor="#3b5998" onPress={this.handleBack}>
          Back Home
        </Icon.Button>
      </View>
    );
  }
}
