import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import config from "./config";
import { PostFeed } from './components/container';

class InstaClone extends Component {

    render(){

        return(
            <View style={{ flex: 1, width: 100 + '%', height: 100 + '%'}}>
                <View style={styles.tempNav}>
                    <Text>Instagramini</Text>
                </View>
                <PostFeed/>
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
    }
});

export default InstaClone;