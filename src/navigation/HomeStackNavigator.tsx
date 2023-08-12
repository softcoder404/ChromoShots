import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import { Image } from 'react-native';
import { HomeStackNavigatorType } from './NavigatorTypes';


const AppHeader = ()=>{
    return (
      <Image source={require('../assets/images/logo.png')} resizeMode= 'cover' style={{width:150,height: 40}}/>
    );
  }
const Stack = createNativeStackNavigator<HomeStackNavigatorType>();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name='Feed' component={HomeScreen} options={{headerTitle: AppHeader}}/>
        <Stack.Screen name='UserProfile' component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;