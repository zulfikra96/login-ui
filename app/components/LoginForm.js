import React,{Component} from 'react';
import {
    TextInput,
    View,
    StyleSheet
} from 'react-native';

export default class LoginForm extends Component{

    render(){
        return(
            <View>
                <TextInput
                    style={styles.editTextInput}
                    underlineColorAndroid="transparent"
                    placeholder="username"
                    placeholderTextColor="#ddd"
                />
                 <TextInput
                    style={styles.editTextInput}
                    underlineColorAndroid="transparent"
                    placeholder="password"
                    placeholderTextColor="#ddd"
                    secureTextEntry={true}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    editTextInput:{
        backgroundColor:'#2ecc71',
        color:'#fff',
        marginBottom:20
    }
});