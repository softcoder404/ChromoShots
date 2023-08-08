
import HomeScreen from '../../src/screens/home/HomeScreen';
import CommentScreen from '../../src/screens/comment/CommentScreen';
import ProfileScreen from '../../src/screens/profile/ProfileScreen';
import EditProfileScreen from '../../src/screens/profile/EditProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import { Image} from 'react-native';

const AppHeader = ()=>{
  return (
    <Image source={require('../assets/images/logo.png')} resizeMode= 'cover' style={{width:150,height: 40}}/>
  );
}


///create a stack navigator for the app component
const Stack = createNativeStackNavigator();
const AppNavigationStack = ()=>{
  return (
    <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerTitle: AppHeader, 
        }} />
      <Stack.Screen name="Comment" component={CommentScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
   
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppNavigationStack/>
    </NavigationContainer>
  )
}

export default Navigation