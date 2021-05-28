
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

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
         
      }
    };


    componentDidMount(){
      this.getApi()
    }

    async getApi () {
      try {
        let respuesta = await fetch("https://randomuser.me/api/");
      }catch (error) {
        console.log(error);
      }
    }

    async storageString(value){
      try {
        await AsyncStorage.setItem('@MyString',value)
      } catch (error){
        console.log(error);
      }
    }

   

    async removeItem(key) {
      try {
        await AsyncStorage.removeItem(key);  
      } catch (error){
        console.log(error);
      }
    }
    



    render(){
      return(
        <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>

        <Text> hola </Text>

        <TouchableOpacity onPress={() => this.storageString('Aca va un string o algo de la API')}> 
          <Text> Guardar string </Text>
        </TouchableOpacity>
        
        </SafeAreaView>
        

  
      )
   };
}

   
  


