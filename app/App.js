import React,{Component} from 'react';
import {
  View,
  AppRegistry,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import Title from './components/Title';
import LoginForm from './components/LoginForm';

export default class App extends Component{

    render(){
      return(
        <View style={styles.container}> 
            <View style={styles.centerPosition}>
            <View style={styles.marginBottom20}>
                <Title/>
            </View>
            <View>
                <LoginForm/>
            </View>
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
