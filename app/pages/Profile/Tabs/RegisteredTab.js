
import React, {Component} from 'react';
import {
    Animated,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ListView
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const listData = [
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        isBuddy: false,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        isBuddy: false,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        isBuddy: false,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        isBuddy: false,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        isBuddy: false,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        isBuddy: true,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        isBuddy: true,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        isBuddy: false,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        isBuddy: false,
    },
    {
        title: "West Golf Club",
        subtitle: "West Gof Club",
        image: require("../../../Images/DashImages/profile.png"),
        isBuddy: false,
    },
];

export default class RegisteredTab extends Component{
  
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      listDataSource: ds.cloneWithRows(listData),
    };
  }

  render(){
    
    return (
      <View >
        {this.props.isSelected && 
            <ListView showsVerticalScrollIndicator={false} removeClippedSubviews={false} 
              dataSource={this.state.listDataSource} renderRow={(rowData, sectionID, rowID) => (this.renderListItem(rowData, rowID))} />
          
        }
      </View>
    )
  }

  renderListItem(rowData, rowID) {

    let padding = {};

    if(rowID == listData.length - 1)
    {
      padding = {marginBottom: 100,}
    }

    return(<View style={padding}>
        <View style={styles.row}>
          <Image style={styles.profile} source={rowData.image} />
          <View style={styles.info}>
            <Text style={styles.name}> {rowData.title} </Text>
            <View style={{flexDirection:'row', marginTop: 5,}}>
              {rowData.isBuddy && <TouchableOpacity style={styles.buddies}>
                <Text style={styles.text}>Buddies</Text>
              </TouchableOpacity>}
              {!rowData.isBuddy && <TouchableOpacity style={styles.add}>
                <Text style={styles.text}>Add Buddy</Text>
              </TouchableOpacity>}
            </View>
          </View>
          <Image style={styles.image} source={require("../../../Images/DashImages/profile.png")}/>
      </View>
      <View style={styles.line}></View></View>
    )
  }
}

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  profile:{
    width: 70,
    height: 70,
  },
  info: {
    marginLeft: 10,
    flex: 1,

  },
  name:{
    color: '#fff',
    fontSize: 16,

  },
  add:{
    width: 120,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 25,
  },
  buddies:{
    width: 120,
    height: 30,
    backgroundColor: '#bbaa64',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 25,
  },
  image:{
    width: 30,
    height: 30,
  },
  text:{
    color: "#000",
  },
  line:{
    width: '100%',
    height: 0.5,
    backgroundColor: "#bbaa64",
    marginTop: 20,
  },
});