import { SafeAreaView} from 'react-native'
import React from 'react'
import { IPost } from '../../types/PostModel';
import user from '../../assets/data/user.json';
import ProfileHeaderCard from './ProfileHeaderCard';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {userId}  = route.params; // query central db to extra the user data
navigation.setOptions({title: userId})
  return (
    <SafeAreaView>
      <FeedGridView 
        data={user.posts as IPost[]}
        ListHeaderComponent={<ProfileHeaderCard/>}
      />
    </SafeAreaView>
  )
}

export default ProfileScreen