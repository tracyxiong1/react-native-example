import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import Navibar from '../components/Navbar';
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
        <Navibar
          title="Counter"
          height={44}
          titleColor="#fff"
          backgroundColor="#3b5998"
          leftButtonTitle="<"
          leftButtonTitleColor="#fff"
          onLeftButtonPress={this.handleBack}
          rightButtonTitleColor="#fff"
        />
        <Counter {...this.props} />
      </View>
    );
  }
}
