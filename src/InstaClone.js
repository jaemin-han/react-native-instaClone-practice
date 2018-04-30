import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

class InstaClone extends Component {
    constructor(){
        super()
        this.state = {
            screenWidth: Dimensions.get("window").width
        };
    }

    render(){
        const imageUri = "https://lh3.googleusercontent.com/mUJK_0Vvc20XsMsZEPTjWZkR24EDls8ViSy3ITn6laO5O2U4efG7EYcHoHd9jb1lV0i_NFZF5AkCHFjt5PFkOWSVmBU" + "=s" + this.state.screenWidth;
        return(
            <View style={{ flex: 1, width: 100 + '%', height: 100 + '%'}}>
                <View style={styles.tempNav}>
                    <Text>Instagramini</Text>
                </View>
                <View style={styles.userBar}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image 
                            style={styles.userPic}
                            source={{
                                uri:
                                    "https://lh3.googleusercontent.com/jGip3ceNulaMJu0b2TT6IQwYCKNQIcSOCtptpVsYnsssFtfPF0AVGRlIXfpF6JVyOIwwjzaSSAhH11oJQAJOKEt5Lw"
                            }}
                        />
                        <Text style={{ marginLeft: 10 }}>Jaemin Han</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 30 }}>...</Text>
                    </View>
                </View>

                <Image 
                    style={{ width: this.state.screenWidth, height: 400}}
                    source={{
                        uri: imageUri
                    }} />
            </View>
        )
    }
}

const styles= StyleSheet.create({
    tempNav: {
        width: 100 + '%',
        height: 65,
        marginTop: 30,
        backgroundColor:'rgb(250, 250, 250)',
        borderBottomColor: 'rgb(233, 233, 233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: "center"
    },

    userBar: {
        width: 100 + "%",
        height: 50,
        backgroundColor: "rgb(255, 255, 255)",
        flexDirection: "row",
        paddingHorizontal: 10,
        // flexDirection: 'row',
        justifyContent: "space-between"
    },

    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    }

})

export default InstaClone;