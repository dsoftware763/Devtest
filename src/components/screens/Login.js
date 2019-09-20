import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity,Animated } from 'react-native';
import Loginstyles from '../styles/LoginStyles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailvalid: true,
            passwordvalid: true,
            emailerror: null,
            passworderror: null,
            isEnabled: true,
            isLoading: false
        };
    }

    validateEmail = (text, type, value) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (type == 'email') {
            if (reg.test(text)) {
                this.setState({
                    emailvalid: true,
                    emailerror: null,
                    email: text
                })
            }
            else {
                this.setState({
                    emailvalid: false,
                    emailerror: "Enter valid Email ",
                    email: ''
                })
            }
        }
    }

    validatePassword = (text, type, value) => {
        var strongRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
        if (type == 'password') {
            if (strongRegex.test(text)) {
                this.setState({
                    passwordvalid: true,
                    passworderror: null,
                    password: text
                })
            }
            else {
                this.setState({
                    passwordvalid: false,
                    passworderror: "Enter valid Password",
                    password: ''
                })
            }
        }
    }

    spinValue = new Animated.Value(0)


    render() {
        const { Container,
            LogoStyles,
            AuthenticationContainer,
            logoContainer,
            TextInputContainer,
            SignupContainer,
            LoginContainer,
            LoginTextStyle,
            TextColor,
            ForgotContainer,
            TextInputStyle,
            TextBlackColor,
            errorContainer,
            error
        } = Loginstyles
        const logo = require('../../assets/logo/Vector.png')
        return (
            <KeyboardAwareScrollView contentContainerStyle={Container}>
                <View style={logoContainer}>
                    <Image source={logo} style={LogoStyles} />
                </View>
                <View style={AuthenticationContainer}>
                    <View style={[TextInputContainer,!this.state.emailvalid ? error : null]}>
                        <TextInput
                            style={TextInputStyle}
                            placeholder="Email"
                            keyboardType="email-address"
                            placeholderTextColor="#898989"
                            onChangeText={(text) => this.validateEmail(text, 'email')}
                        />
                    </View>
                    <View style={[TextInputContainer,!this.state.passwordvalid ? error : null]}>
                        <TextInput
                            style={TextInputStyle}
                            placeholder="Password"
                            placeholderTextColor="#898989"
                            secureTextEntry={true}
                            onChangeText={(text) => this.validatePassword(text, 'password')}
                        />
                    </View>
                    <View style={ForgotContainer}>
                        <Text style={TextBlackColor}>Forgot </Text>
                        <TouchableOpacity>
                            <Text style={TextColor}>Email </Text>
                        </TouchableOpacity>
                        <Text style={TextBlackColor}>Or </Text>
                        <TouchableOpacity>
                            <Text style={TextColor}>Password</Text>
                        </TouchableOpacity>
                        <Text style={TextBlackColor}>?</Text>
                    </View>
                    <View style={LoginContainer}>
                        <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('Loader')}
                        >
                            <Text style={LoginTextStyle}>Log In</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={SignupContainer}>
                        <Text style={TextBlackColor}>Don't have an account ? </Text>
                        <TouchableOpacity>
                            <Text style={TextColor}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}
