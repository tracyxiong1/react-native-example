import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';

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
)
export default class CounterContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  handleBack = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'pop' });
  }

  render() {
    const { dispatch } = this.props;
    return (
      <View style={styles.container}>
        <Counter {...this.props} {...bindActionCreators(CounterActions, dispatch)} />
        <TouchableOpacity onPress={() => { dispatch({ type: 'pop' }); }}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
