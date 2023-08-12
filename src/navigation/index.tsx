
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import BottomNavTabs from './BottomNavTabs';
import CommentScreen from '../screens/Comment/CommentScreen';
import { RootNavigatorType } from './NavigatorTypes';


///create a stack navigator for the app component
const Stack = createNativeStackNavigator<RootNavigatorType>();
const AppNavigationStack = ()=>{
  return (
    <Stack.Navigator initialRouteName='Dashboard' >
      <Stack.Screen 
      name='Dashboard' 
      component={BottomNavTabs} 
      options={{ headerShown:false }}
      />
      <Stack.Screen name='Comments' component={CommentScreen}/>
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