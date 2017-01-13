import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default function Facebook() {
  return (
    <View style={styles.container}>
      <Icons.Button name="facebook-square" backgroundColor="#3b5998" >
        Navigate to Facebook
      </Icons.Button>
    </View>
  );
}
