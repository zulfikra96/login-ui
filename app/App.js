import React,{Component} from 'react';
import {
  View,
  AppRegistry,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native';

import Title from './components/Title';
import LoginForm from './components/LoginForm';

export default class App extends Component{

    render(){
      return(
        <View style={styles.container}> 
            <StatusBar barStyle="light-content"/>
            <View style={styles.centerPosition}>
            <KeyboardAvoidingView behavior="padding">
            <View style={styles.marginBottom20}>
                <Title/>
            </View>
            <View>
                <LoginForm/>
            </View>
            </KeyboardAvoidingView>
            </View>              
        </View>
      );
    }
}


const styles = StyleSheet.create({
       container:{
           flex:1,
           backgroundColor:'#27ae60'
       },
       centerPosition:{
           flexGrow:1,
           justifyContent:'center',
           paddingLeft:30,
           paddingRight:30
       },
       marginBottom20:{
           marginBottom:20
       }
});
