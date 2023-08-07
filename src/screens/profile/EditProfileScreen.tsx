import { View, Text, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import font from '../../theme/font';
import { useForm,Controller } from 'react-hook-form';


type TextFieldProps = {
    label?: string,
    value?: string,
    multiline?: boolean,
}
const CustomTextField = ({label = "Label",multiline = false}:TextFieldProps) => {
    return (
    <View style={styles.formField}>
        <Text style={styles.label} >{label}</Text>
        <TextInput multiline={multiline} style={styles.textInput} placeholder='Enter your name'/>
    </View>
    );
}

const EditProfileScreen = () => {
    const {control, handleSubmit,} = useForm();
  return (
    <SafeAreaView style={styles.scaffold}>
        <Image style={styles.profileImage} source={{uri:user.image}} />
        <Text style={styles.textButton}>Change profile photo</Text>
        {/* Form Fields */}
        <View style={styles.formContainer}>
           <CustomTextField label='Name' />
           <CustomTextField label='Username'/>
           <CustomTextField label='Website'/>
           <CustomTextField label='Bio' multiline = {true}/>
           <Text style={styles.textButton}>Submit</Text>
        </View>
       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    scaffold: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    profileImage: {
        width: '30%',
        aspectRatio: 1,
        borderRadius: 1000,
        marginTop: 35,
    },
    textButton: {
        color: colors.primary,
        padding: 25,
        fontSize: font.size.md,
        fontWeight: font.weight.bold,
    },
    formContainer:{
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    formField: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 25,
        alignSelf: 'stretch',
        alignItems: 'center',
        
    },
    label: {
        width: '25%',
        fontSize: font.size.md,
        color: colors.grey,
        fontWeight: font.weight.normal,
    },
    textInput: {
        borderColor: colors.border,
        borderBottomWidth: 1,
        flex: 1,
    }
});
export default EditProfileScreen