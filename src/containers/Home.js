import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

@connect(
  state => state,
)
export default class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  toCounter = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'push',
      key: 'counter',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React native Study Demo!
        </Text>
        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.toCounter}>
          Navigate to Counter
        </Icon.Button>
      </View>
    );
  }
}
