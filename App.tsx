/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import { StyleSheet , SafeAreaView} from 'react-native';
 import CoinScreen from './src/screens/CoinScreen';
 
 const App = () => {
   
   return (
     <SafeAreaView style={styles.container}>
 
       <CoinScreen/>
 
     </SafeAreaView>
   );
 };
 
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     // marginTop: StatusBar.currentHeight || 0,
   }
 })
 
 export default App;
 