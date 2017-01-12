import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
  back: {
    margin: 10,
    fontSize: 20,
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
        <TouchableOpacity onPress={this.handleBack}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
