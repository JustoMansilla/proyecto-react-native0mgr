
import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView
} from 'react-native';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        contador: 0,
      }
    }

    render(){
      return(

        <SafeAreaView>
          <Text>Contador: {this.state.contador}</Text>
          <Button title="Sumar" onPress={() => {this.setState({contador: this.state.contador + 1})}}/>
          <Button title="Restar" onPress={() => {this.setState({contador: this.state.contador - 1})}}/>
          <Button title="Resetear" onPress={() => {this.setState({contador: this.state.contador = 0})}}/>
        </SafeAreaView>

        

      );
    }
};



   
  


