import React,{Component} from 'react';
import {
    TextInput,
    View,
    StyleSheet,
    TouchableHighlight,
    Text,
    Alert,
   
} from 'react-native';

export default class LoginForm extends Component{

    constructor(){
        super();

        this.state = {
            passwordInput:''
        }
    }

    sayit(){
        Alert.alert(
            "hello"
        );
    }

    render(){
        return(
            <View>
                <TextInput
                    style={styles.editTextInput}
                    underlineColorAndroid="transparent"
                    placeholder="username"
                    placeholderTextColor="#ddd"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                 <TextInput
                    style={styles.editTextInput}
                    underlineColorAndroid="transparent"
                    placeholder="password"
                    placeholderTextColor="#ddd"
                    secureTextEntry={true}
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableHighlight style={styles.button}
                    onPress={() => this.sayit()}
                    underlayColor="white"
                >
                    <Text style={{textAlign:'center', fontSize:24, color:'#fff'}}>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    editTextInput:{
        backgroundColor:'#2ecc71',
        color:'#fff',
        marginBottom:20,
        paddingHorizontal:20
    },
    button:{
        padding:10,
         backgroundColor:'#027936',
    }
});