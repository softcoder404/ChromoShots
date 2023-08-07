import { StyleSheet, View} from 'react-native';

import colors from './src/theme/colors';

import HomeScreen from './src/screens/home/HomeScreen';
import CommentScreen from './src/screens/comment/CommentScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import EditProfileScreen from './src/screens/profile/EditProfileScreen';




const App = () => {
  return (
    <View style={styles.app}>
    {/* <HomeScreen/> */}
    {/* <CommentScreen /> */}
    {/* <ProfileScreen /> */}
    <EditProfileScreen />
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