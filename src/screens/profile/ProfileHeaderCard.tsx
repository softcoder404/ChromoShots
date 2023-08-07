import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Button from '../../components/Button/Button';
import colors from '../../theme/colors';
import fonts from '../../theme/font';
import user from '../../assets/data/user.json';

const ProfileHeaderCard = () => {
  return (
    <View style= {styles.profileHeaderCard}>
    <View style= {styles.headerRow}>
        <Image style={styles.headerProfileImage} source={{uri: user.image}} />
        <View style={styles.headerNumbersRow}>
            <View style={styles.numberItem}>
                <Text style={styles.boldText}>56</Text>
                <Text>Posts</Text>
            </View>
            <View  style={styles.numberItem}>
                <Text  style={styles.boldText}>1500</Text>
                <Text>Followers</Text>
            </View>
            <View  style={styles.numberItem}>
                <Text  style={styles.boldText}>100</Text>
                <Text>Following</Text>
            </View>
        </View>
    </View>
    <Text  style={styles.boldText}>{user.name}</Text>
    <Text  style={{paddingTop:8}} >{user.bio}</Text>
    {/* Buttons */}
    <View style={styles.actionButtonRow}>
        <Button title={ "Edit Profile" }/>
        <Button title={ "More" }/>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    profileHeaderCard: {
        padding: 10,
        backgroundColor: colors.white
    },
    headerProfileImage: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 50,
    },
    headerRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    numberItem: {alignItems: 'center'},
    headerNumbersRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    boldText: {
        fontWeight: fonts.weight.semi,
        fontSize: fonts.size.md,
    },
    actionButtonRow: {
        flexDirection: 'row',
        marginTop: 8,
    }
});
export default ProfileHeaderCard