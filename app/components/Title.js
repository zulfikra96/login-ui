import React,{Component} from 'react';
import {
  View,
  AppRegistry,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default class Title extends Component{

    render(){
      return(     
        <View style={styles.logoContainer}>
            <Image
            style={styles.imageCircle}
            source={require('../../images/photo.jpg')}
            />
            <Text style={styles.title}>Selamat Datang </Text>
        </View>
      );
    }
}


const styles = StyleSheet.create({
       
       imageCircle:{
           borderRadius:100
       },
       logoContainer:{
            justifyContent:'center',
            alignItems:'center',
            flexGrow:1,  
       },
       title:{
           color:'#fff',
           marginTop:20,
           width:100,
           textAlign:'center'
       }
});
