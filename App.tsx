import {ScrollView, StyleSheet, View} from 'react-native';
import FeedPost from './src/components/Post/FeedPost';

const App = () => {
  return (
    <ScrollView style={styles.app}>
     <FeedPost/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app:{
    flex: 1,
  }
});

export default App;