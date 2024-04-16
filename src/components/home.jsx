import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAuth } from '../../authslice/authslice';

const HomeScreen = () => {
  const {user} = useSelector((state)=>state.auth)
  const dispatch =  useDispatch()
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome, {user.email}!</Text>
      <View style={styles.buttonContainer}>
        <Button title="View Profile" onPress={() => console.log('View Profile')} />
        <Button title="View Messages" onPress={() => console.log('View Messages')} />
        <Button title="Logout" onPress={()=>{dispatch(LogoutAuth())}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});

export default HomeScreen;
