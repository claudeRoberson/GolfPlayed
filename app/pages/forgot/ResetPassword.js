'use strict';

import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableHighlight,
    Alert,
    TouchableOpacity,
    ToastAndroid,Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Spinner from 'react-native-loading-spinner-overlay';

import InputContainer from './InputContainer';
import { Actions } from 'react-native-router-flux';
import RouterScene from '../../Constant/constant';
const {

    MAIN_CONTENT,
    AUTHENTICATION,
    LOG_IN,
    ROOT_SCENE,
    SIGN_UP,
    FORGET_PASSWORD,
    INTRO_SLIDES,
    DASH_BOARD,
    RESET_SUCCESS
} = RouterScene;
export default class ResetPassword extends React.Component {

    constructor(props) {
        super(props)

        this.state =  {
            username: '',
            password: '',
            animating: false
        }
    }

    componentWillUnmount() {
        this.setState({animating: false});

    }
    componentDidMount() {
        this.setState({animating: false});
        //SplashScreen.hide();

    }
    handleUsernameChange(text) {
        this.setState({username: text});
    }
    handlePasswordChange(text) {
        this.setState({password: text});
    }
    handleSubmit() {


    }



    navigateToSuccessPage = () => {
        //By Dmitry
        Actions[RESET_SUCCESS]()
    };


    render() {
        const profileImage = require('../../Images/AuthImages/profile.png');
        var overrides = { textColor : '#ffffff', backgroundColor: '#004c86' };
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'#000000'}
                />

                <Image style={styles.backgroundImage} source={require('./img/tut1_bg.png')} />
                <View style={styles.header}>
                    <Image style={styles.mark} source={profileImage} />
                </View>
                <View style={styles.inputs}>

                    <InputContainer
                        secureTextEntry={false}
                        placeholder="Enter a new password"
                        placeholderTextColor="#7f7f7f"
                        value={this.state.username}
                        onChangeText={this.handleUsernameChange.bind(this)}
                        returnKeyType={'next'}
                        inlineImageLeft="username"
                        inlineImagePadding={10}
                    />
                    <InputContainer
                        secureTextEntry={false}
                        placeholder=" Confirm the new Password"
                        placeholderTextColor="#7f7f7f"
                        value={this.state.password}
                        onChangeText={this.handlePasswordChange.bind(this)}
                        returnKeyType={'go'}
                        onSubmitEditing={this.handleSubmit.bind(this)}
                        inlineImageLeft="lock"
                        inlineImagePadding={10}
                    />
                    <TouchableOpacity style={styles.buttonWrap} onPress={this.navigateToSuccessPage}>
                        <View style={styles.button}>
                            <Text style={{color: '#000'}}>Confirm</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <Spinner color="#00695C" visible={this.state.animating} />

            </View>
        );
    }


}


var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#eee'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .15,
        marginBottom: 10,
        marginTop: 20,
        backgroundColor: 'transparent',
        paddingTop:30,
        paddingBottom:30

    },
    mark: {
        top:0,
        width: 120,
        height: 120,
        resizeMode:'contain'
    },
    signin: {
        backgroundColor: '#FF3366',
        padding: 20,
        alignItems: 'center',
        width:320
    },
    signup: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .15
    },
    inputs: {
        paddingTop:40,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 15,
        flex: .55
    },

    forgotContainer: {
        alignItems: 'flex-end',
        padding: 15,
    },

    whiteFont: {
        color: '#FFF'
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        position: 'absolute',
        top: height/2 -80,
        height: 200,
        width: width
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
    backgroundImage: {
        backgroundColor: '#ccc',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotPassword: {
        color: '#BBAA64',
        backgroundColor: 'transparent'
    },
    buttonWrap: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: width-40,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 50,
        marginTop: 20,
    }

})

