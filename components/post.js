import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

class Post extends React.Component {
    render() {
        return (
            <View style={ styles.post }>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={ styles.thumb } source={{ uri: this.props.image }}/>
                    <View style={{ flex: 1, padding: 10 }}>
                        <Text style={{ ...styles.top }}>{ this.props.title }</Text>
                        <Text style={{ fontSize: 10 }}>{ this.props.city }</Text>
                    </View>                    
                    <Text style={{ ...styles.top, padding: 10 }}>Rp.{ this.props.price }</Text>
                </View>
                <View>
                    <Image style={{ width: window.width - 40, resizeMode: 'cover', height: 250 }} source={{ uri: this.props.image }}/>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={ styles.thumb } source={{ uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/792-200.png' }}/>
                    <Text style={{ flex: 1, marginVertical: 10, marginRight: 10 }}>{ this.props.address }</Text>                
                </View>
            </View>
        )
    }
}

const styles = {
    post: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginBottom: 20
    },
    thumb: {
        margin: 10,
        height: 25,
        width: 25
    },
    top: {
        color: 'black',
        fontWeight: 'bold'      
    }
}

export default Post;