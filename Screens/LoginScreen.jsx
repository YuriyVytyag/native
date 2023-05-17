import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
