
import React, { Component } from 'react';
import {
  Text,
  Image,
  Button,
  SafeAreaView,
  Alert
} from 'react-native';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        contador: 0,  
      }
    }


    showAlert() {
      Alert.alert(
        'Alert title',
        "Alert message",
        [{ text: "Ask me later", onPress: () => console.log("Se presiono ask me later") },
         { text: "OK", onPress: () => console.log("Se presiono OK") },
         {text: "Cancel", onPress: () => console.log("Se presiono CANCEL")}]
      )
    }




    render(){
      return(

        <SafeAreaView>
          <Text>Contador: {this.state.contador}</Text>
          <Button title="Sumar" onPress={() => {this.setState({contador: this.state.contador + 1})}}/>
          <Button title="Restar" onPress={() => {this.setState({contador: this.state.contador - 1})}}/>
          <Button title="Resetear" onPress={() => {this.setState({contador: this.state.contador = 0})}}/>

          <Button title="APRETAR!" color="blue" onPress={this.showAlert.bind(this)}/>

          <Image style={{width: 100, height: 100}} source={{uri: 'https://www.concienciaeco.com/wp-content/uploads/2015/08/Pantera-Negra-Vegetariana_thumb.jpg'}}/> 
          
        </SafeAreaView>

        

      );
    }
};



   
  


