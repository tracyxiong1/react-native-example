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

export default function Github() {
  return (
    <View style={styles.container}>
      <Icons.Button name="github" backgroundColor="#3b5998" >
        Navigate to Github
      </Icons.Button>
    </View>
  );
}
