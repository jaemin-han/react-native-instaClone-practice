import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from "../../config";

class Post extends Component {
    constructor(){
        super()
        this.state = {
            liked: false,
            screenWidth: Dimensions.get("window").width
        };
    }

    likeToggled(){
        this.setState({
            liked: !this.state.liked
        })
    }

    render(){
        const imageHeight = Math.floor(this.state.screenWidth * 1.1)
        const imageUri = "https://lh3.googleusercontent.com/mUJK_0Vvc20XsMsZEPTjWZkR24EDls8ViSy3ITn6laO5O2U4efG7EYcHoHd9jb1lV0i_NFZF5AkCHFjt5PFkOWSVmBU" + "=s" + imageHeight + "-c";
        // alert(imageHeight)

        // changing red color
        // ternary operator: valuate expression.true.false.
        const heartIconColor = (this.state.liked) ? "rgb(252,61,57)" : null;

        return(
            <View style={{ flex: 1, width: 100 + "%" }}>

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

                {/* TouchableOpacity is for some type of action like click - make sure to import */}
                <TouchableOpacity 
                    // react native changing background flash color
                    activeOpacity = {0.8}
                    onPress={() => {
                        this.likeToggled()
                    }}>
                <Image 
                    style={{ width: this.state.screenWidth, height: 400 }}
                    source={{
                        uri: imageUri
                    }} />
                </TouchableOpacity>
                    <View style={styles.iconBar}>
                        <Image 
                            style={[styles.icon, {height: 45, width: 45, tintColor: heartIconColor }]} 
                            source={config.images.heartIcon}/>
                        <Image 
                            style={[styles.icon, {height: 36, width: 36}]}     
                            source={config.images.bubbleIcon}/>
                        <Image
                            resizeMode="stretch" 
                            style={[styles.icon, {height: 50, width: 35}]} 
                            source={config.images.arrowIcon}/>
                    </View>
                    <View style={styles.iconBar}>
                        <Image 
                            style={[styles.icon, {height: 30, width: 30}]} 
                            source={config.images.heartIcon}/>
                        <Text>128 Likes</Text>
                    </View>
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
        height: config.styleConstants.rowHeight,
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
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
    },

    icon: {
        marginLeft: 5
    }


});

export default Post;