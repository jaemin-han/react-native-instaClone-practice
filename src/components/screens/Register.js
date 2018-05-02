import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from "react-native";
import config from "../../config";


class Register extends Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                email: "",
                password: ""
            }
        }
    };

    updateText(text, field) {
        let newCredentials = Object.assign(this.state.credentials);
        newCredentials[field] = text;
        this.setState({
            credentials: newCredentials
        });
    }

    register() {
        //send credential to server
        //if signup success
        // alerting login and password
        fetch(config.baseUrl + 'signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.credentials)
        })
        .then((response) => response.json())
        .then(jsonResponse => {
            if(jsonResponse.confirmation==="success"){
                this.props.navigation.navigate('main');
            } else {
                throw new Error({ message: 'sorry, something went wrong' });
            }
        })
        .catch(err => {
            console.log(err.message);
        }); 
        // alert(JSON.stringify(this.state.credentials));
    }

    render() {
        return (
            <View
                style={{
                    height: 100 + "%",
                    width: 100 + "%",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "tomato"
                }}
            >
            <Text>Register Page</Text>
            <TextInput 
                value={this.state.login}
                autoCorrect={false}
                onChangeText={text => this.updateText(text, 'email')} 
                placeholder="Username" 
                style={styles.input} 
            />
            <TextInput
                value={this.state.password}
                autoCorrect={false}
                onChangeText={text => this.updateText(text, 'password')} 
                secureTextEntry
                placeholder="Password" 
                style={styles.input} 
            />
            <Button 
                onPress={() => {
                    this.register();
                }}
                title="SignUp"
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 100 + "%",
        paddingHorizontal: 50,
        backgroundColor: "rgb(255, 255, 255)",
        marginBottom: 10
    }
});

export default Register;