import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class InstaClone extends Component {
    render(){
        return(
            <View style={{ flex: 1, width: 100 + '%', height: 100 + '%'}}>
                <View style={styles.tempNav}>
                    <Text>Instagramini</Text>
                </View>
                <View style={styles.userBar}>
                    <View style={{ flexDirection: "row" }}>
                        <Image 
                            style={{width: 40, height: 40 }}
                            source={{
                                uri:
                                    "https://lh3.googleusercontent.com/jGip3ceNulaMJu0b2TT6IQwYCKNQIcSOCtptpVsYnsssFtfPF0AVGRlIXfpF6JVyOIwwjzaSSAhH11oJQAJOKEt5Lw"
                            }}
                        />
                        <Text>Jaemin Han</Text>
                    
                    </View>
                    <View />
                </View>


          
                
                
               
 
                <Image 
                    style={{ width: 100+'%', height: 250}}
                    source={{
                        uri: "https://lh3.googleusercontent.com/mUJK_0Vvc20XsMsZEPTjWZkR24EDls8ViSy3ITn6laO5O2U4efG7EYcHoHd9jb1lV0i_NFZF5AkCHFjt5PFkOWSVmBU"
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
        flexDirection: "row"
    }

})

export default InstaClone;