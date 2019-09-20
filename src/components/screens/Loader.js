import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import LoaderStyle from '../styles/LoaderStyles'
export default class Loader extends Component {
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0)
        this.state = {
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Dashboard');
        }, 3000);
    }
    render() {
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear
            }
        ).start()

        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        const loader = require('../../assets/loader.png')
        const {Container,ImageContainer,TextContainer,TextBlackColor} =LoaderStyle
        return (
            <View style={Container}>
               <View style = {ImageContainer}>
               <Animated.Image
                    style={{ transform: [{ rotate: spin }] }}
                    source={loader} />
               </View>
               <View style = {TextContainer}>
                   <Text style={TextBlackColor}>
                       Loading...
                   </Text>
               </View>
            </View>

        );
    }
}
