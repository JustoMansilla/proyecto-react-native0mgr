import React, { Component } from 'react';
import {
  Text,
  Image,
  Button,
  SafeAreaView,
  Alert,
  View,
  TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

class screen_viewImportedCards extends Component {
   constructor (){
       super();
       this.state ={
           importedUsers: []
       }
   }
   componentDidMount(){

   }
   async getData (){
       try {
           const resultado = await AsyncStorage.getItem('Users');
           this.setState({importedUsers:JSON.parse(resultado)});
           return resultado;
       } catch (error) {
           console.log(error)
       }
   }

   render(){
       const values = this.state.importedUsers.map( item =>
        <Text key={item.login.uuid}
        style= {{fontSize: 20}}>{item.name.first}</Text>
        )
   }
}
export {screen_viewImportedCards}