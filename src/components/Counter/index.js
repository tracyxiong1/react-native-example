import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Immutable from 'immutable';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  icon: {
    marginBottom: 10,
  },
});

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.instanceOf(Immutable.Map).isRequired,
  };

  constructor(props) {
    super(props);
    const { incrementAsync } = props;
    this.incrementAsync = () => incrementAsync();
  }

  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <View>
        <Text style={styles.text}>Clicked: {counter.get('counter')} times</Text>
        <View style={styles.icon}>
          <Icon.Button name="ios-add" size={30} onPress={increment} >Increment</Icon.Button>
        </View>
        <View style={styles.icon}>
          <Icon.Button name="ios-remove" size={30} onPress={decrement} >Increment</Icon.Button>
        </View>
        <View style={styles.icon}>
          <Icon.Button name="ios-add" size={30} onPress={incrementIfOdd} >Increment if odd</Icon.Button>
        </View>
        <View style={styles.icon}>
          <Icon.Button name="ios-add" size={30} onPress={this.incrementAsync} >Increment async</Icon.Button>
        </View>
      </View>
    );
  }
}
