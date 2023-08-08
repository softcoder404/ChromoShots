import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, NativeSyntheticEvent, TextInputFocusEventData, TextInputChangeEventData, Pressable } from 'react-native'
import React, { useState } from 'react';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import font from '../../theme/font';
import { useForm,Controller, Control, RegisterOptions } from 'react-hook-form';
import { IUser } from '../../types/PostModel';
import { launchImageLibrary} from 'react-native-image-picker';

const EditProfileScreen = () => {
    const {control, handleSubmit} = useForm<IEditableUser>({
        defaultValues:{
            username: user.username,
            bio: user.bio,
            name: user.name,
        }
    });
    
    const submitForm = (data:IEditableUser) => {
            console.log('Hey data',data);
    };
    const websitePatterns =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

  //Handle imagePicker
  const [profileImageUri,setProfileImageUri] = useState(user.image);

  const handleChangeProfilePicture = ()=>{
  
     launchImageLibrary({mediaType:'photo',selectionLimit: 1,presentationStyle:'pageSheet'},(response)=> {
        if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorMessage);
          }else {
            if(response.assets && response.assets.length > 0){
                const uri = response.assets[0].uri || user.image
               setProfileImageUri(uri)
            }
          }
     });
  }


  return (
    <SafeAreaView style={styles.scaffold}>
        <Pressable onPress={handleChangeProfilePicture}>
         <Image style={styles.profileImage} source={{uri:profileImageUri}} />
        </Pressable>
        <Text style={styles.textButton}>Change profile photo</Text>
        {/* Form Fields */}
        <View style={styles.formContainer}>
        <CustomTextField 
        rules={{required:"Fullname is required",minLength:{value: 4,message:'your fullname should be more than 4 chars'}}} name="name" control={control} label='Name' />
        <CustomTextField
         rules={{required:"Username is required"}}
        name="username" control={control} label='Username' />
        <CustomTextField 
        rules={{required:"Website is required",pattern:{value:websitePatterns,message:'Invalid website'}}}
        name="website" control={control} label='Website' />
        <CustomTextField 
            multiline
            name="bio" 
            rules={{required:"Bio is required"}}
            control={control} 
            label='Bio' />
        
        <Text onPress={handleSubmit(submitForm)} style={styles.textButton}>Submit</Text>
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
    }
});
export default EditProfileScreen



//create type union of editable fields
type IEditableUserFields = 'name' | 'username' | 'bio' | 'website';

type IEditableUser = Pick<IUser,IEditableUserFields >

type TextFieldProps = {
    control?: Control<IEditableUser,object>,
    rules?: object,
    name: IEditableUserFields,
    label?: string,
    multiline?: boolean,
    
}
const CustomTextField = ({
  control,rules, name,label = 'Title',multiline = false,}:TextFieldProps) => {
    return (
        <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field:{onChange,onBlur,value},fieldState:{error}}) => {
            
            return (
            <View style={styles.formField}>
                <Text style={styles.label} >{label}</Text>
                <View style={{flex: 1}}>
                <TextInput 
                        value={value}
                        onBlur={onBlur}
                        multiline={multiline} 
                        style={[styles.textInput,{borderColor: error ? colors.red : colors.border}]} 
                        onChangeText={onChange}
                        placeholder='Enter your value'/>
                    {error && <Text style={{color: colors.red,paddingTop:5}}>{error.message || 'Invalid input field'}</Text>}
                </View>
            </View>
            );
        }}
        />
    );
}
