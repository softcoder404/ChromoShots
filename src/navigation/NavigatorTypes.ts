//create a type for the navigators by mapping the name with params

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/native';

export type RootNavigatorType = {
    Dashboard: undefined,
    Comments: {postId: string}
};

export type MyProfileRouteProp = RouteProp<BottomTabNavigatorType, "MyProfile">;
export type MyProfileNavigatorProps = BottomTabNavigationProp<BottomTabNavigatorType, 'MyProfile'>
export type BottomTabNavigatorType = {
    HomeStack: undefined,
    Search: undefined,
    Upload: undefined,
    Notifications: undefined,
    MyProfile: undefined, 
}
  
export type UserProfileRouteProp = RouteProp<HomeStackNavigatorType, 'UserProfile'>
export type FeedNavigationProps = NativeStackNavigationProp<HomeStackNavigatorType,'Feed'>;
export type HomeStackNavigatorType = {
    Feed: undefined,
    UserProfile: {userId: string| number}
};

export type ProfileNavigatorProps = NativeStackNavigationProp<ProfileStackNavigatorType, 'Profile'> 
export type ProfileStackNavigatorType = {
    Profile: undefined,
    'Edit Profile': undefined,
}; 

