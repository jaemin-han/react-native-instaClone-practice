import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from "react-native";

class Register extends Component {
    
    constructor() {
        super()
        this.state = {
            credentials: {
                login: "",
                password: ""
            }
        }
    };

    // updateText() {

    // }

    register() {
        //send credential to server
        //if signup success
        this.props.navigation.navigate('main');

        //else error message
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
                    placeholder="Username" 
                    style={styles.input} 
                />
                <TextInput 
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