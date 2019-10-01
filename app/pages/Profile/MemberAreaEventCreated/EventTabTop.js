// By Dmitry
import React from 'react';
import { 
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import RouterScene from '../../../Constant/constant.js';
const {
  
  MEMBERS_AREA_INVITE_GUESTS
} = RouterScene;


export default class EventTabTop extends React.Component{

  constructor(props)
  {
    super(props);
    if(props.active == "first")
    {
      this.state = { first: {backgroundColor: '#7f7f7f'}, 
              second: {backgroundColor: 'white'},
              index: 0};
    }
    else
    {
      this.state = { first: { backgroundColor: 'white'},
                    second: {backgroundColor: '#7f7f7f'},
                    index: 1} ;
    }

  }
  MEMBERS_AREA_INVITE_GUESTS = () => {
    //By Harshit
    Actions[MEMBERS_AREA_INVITE_GUESTS]()
  };
  render() {

    let handleToUpdate = this.props.handleToUpdate;
    
    return ( <View style={[styles.container, this.props.style]}>
        <TouchableOpacity onPress={this.MEMBERS_AREA_INVITE_GUESTS}>
          <View style={[styles.leftButton, this.props.first]}>
            <Text style={styles.text}>Invite Guests</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.gap}></View>
      
        <View style={styles.gap}></View>
        <TouchableOpacity>
          <View style={[styles.rightButton, this.props.second]}>
            <Text style={styles.text}>Guest List</Text>
          </View>
        </TouchableOpacity>
    </View>);
  }
}

const {
  CHAT_SCREEN,
  NEW_CHAT_SCREEN,
  NEW_CHAT_GROUP_SCREEN
} = RouterScene;

let Window = Dimensions.get('window');

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    leftButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: (Window.width / 2) - 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: 'white',
        padding: 5,
    },
 
    rightButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: (Window.width / 2) - 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'white',
        
        padding: 5
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black',
        fontSize: 15,
        backgroundColor: 'transparent'
    },
    gap:{
      width: 3,
    }
}