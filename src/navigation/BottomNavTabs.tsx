import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchSreen from '../screens/Search/SearchSreen';
import CreatePostScreen from '../screens/CreatePost/CreatePostScreen';
import NotificationScreen from '../screens/Notification/NotificationScreen';
import Icons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/colors';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import { BottomTabNavigatorType } from './NavigatorTypes';




  
const Tabs = createBottomTabNavigator<BottomTabNavigatorType>();
const BottomNavTabs = () => {
  return (
   <Tabs.Navigator screenOptions={{tabBarShowLabel:false, tabBarActiveTintColor: colors.primary}} >
        <Tabs.Screen 
        name='HomeStack' 
        component={HomeStackNavigator} 
        options={{ headerShown:false, tabBarIcon: ({size,color})=> <Icons name='home-filled' size={size} color={color}/>}}
        />
        <Tabs.Screen 
        name='Search' 
        component={SearchSreen}
        options={{tabBarIcon: ({size,color})=> <Icons name='search' size={size} color={color}/>}}
        />
        <Tabs.Screen 
        name='Upload' 
        component={CreatePostScreen}
        options={{tabBarIcon: ({size,color})=> <Icons name='add-circle-outline' size={size} color={color}/>}}
        />
        <Tabs.Screen 
        name='Notifications' 
        component={NotificationScreen}
        options={{tabBarIcon: ({size,color})=> <Icons name='favorite-border' size={size} color={color}/>}}
        />
        <Tabs.Screen 
        name='MyProfile' 
        component={ProfileStackNavigator}
        options={{tabBarIcon: ({size,color})=> <FontAwesome name='user-circle-o' size={size} color={color}/>, headerShown: false }}
        />
   </Tabs.Navigator>
  )
}

export default BottomNavTabs