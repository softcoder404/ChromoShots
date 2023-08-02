import { StyleSheet, View} from 'react-native';

import colors from './src/theme/colors';

import HomeScreen from './src/screens/home/HomeScreen';




const App = () => {
  return (
    <View style={styles.app}>
    <HomeScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  app:{
    flex: 1,
    backgroundColor: colors.white
  }
});

export default App;