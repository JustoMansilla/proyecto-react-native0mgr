
import React, { Component } from 'react';
import {
  Text,
  Image,
  Button,
  SafeAreaView,
  Alert,
  View
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

   

    async removeItem(key) {
      try {
        await AsyncStorage.removeItem(key);  
      } catch (error){
        console.log(error);
      }
    }
    
    // const ArticlesFromApi = async () => {
    //   try {
    //     let respuesta = await fetch(
    //       "https://randomuser.me/api/"
    //     );
       
    //   } catch (error) {
    //      console.error(error);
    //   }
    // };





    render(){
      return(
        <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>

        <Text> hola </Text>
        
        </SafeAreaView>
        

  
      )
   };
}

   
  


