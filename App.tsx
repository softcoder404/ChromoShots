import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import FeedPost from './src/components/Post/FeedPost';
import colors from './src/theme/colors';
import post from './src/data/posts/PostData';

import posts from './src/assets/data/posts.json';
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