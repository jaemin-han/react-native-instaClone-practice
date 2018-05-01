import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Profile extends Component {
    
    login() {
        // alert("pressed");
        //Navigate to Main Page
        this.props.navigation.navigate('main');
    }

    render() {
        return (
            <TouchableOpacity 
                style={{
                    height: 100 + "%",
                    width: 100 + "%",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onPress={() => {
                    this.login();
                }}
            >
                <Text>Login Page</Text>
            </TouchableOpacity>
        );
    }
}

export default Profile;