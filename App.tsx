import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const App = () => {
  return (
    <View style = {{flex:1 ,alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello World <AntDesign name='home' size={22}/></Text>
    </View>
  );
}

export default App;