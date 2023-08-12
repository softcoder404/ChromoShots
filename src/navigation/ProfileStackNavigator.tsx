
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProfileScreen from '../screens/Profile/ProfileScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import { ProfileStackNavigatorType } from './NavigatorTypes';

const Stack = createNativeStackNavigator<ProfileStackNavigatorType>();


const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name='Profile' component={ProfileScreen}/>
      <Stack.Screen name= "Edit Profile" component={EditProfileScreen} />
    </Stack.Navigator>
  )
}

export default ProfileStackNavigator