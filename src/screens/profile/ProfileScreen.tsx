import { SafeAreaView} from 'react-native'
import React from 'react'
import { IPost } from '../../types/PostModel';
import user from '../../assets/data/user.json';
import ProfileHeaderCard from './ProfileHeaderCard';
import FeedGridView from '../../components/FeedGridView/FeedGridView';

const ProfileScreen = () => {
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