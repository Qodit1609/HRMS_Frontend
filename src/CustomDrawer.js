import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
import avatar from './main/assets/images/avatar3.jpg';
import setting from './main/assets/images/setting.png';
import logout from './main/assets/images/logout.png';


export default class CustomDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    var data = [[]];
    return (
      <View style={{ flex: 1 }}>
        <View >
          <Image style={styles.Imageback}
            resizeMode='cover'
            source={avatar}
            blurRadius={6}
          />
          <View style={{ height: 80, marginTop: -150 }} />
          <DropdownMenu
            style={{ flex: 1 }}
            bgColor={'white'}
            tintColor={'black'}
            activityTintColor={'green'}
            handler={(selection, row) => this.setState({ text: data[selection][row] })}
            data={data}
          >
            <View>
              <View>
                <TouchableOpacity onPress={() => navigation.openDrawer({ NotificationsScreen })}>
                  <Image
                    style={styles.imageavtar}
                    source={avatar} />
                </TouchableOpacity>
              </View>

            </View>

          </DropdownMenu>
        </View>
        <View style={styles.changemail}>
          <Text style={styles.name}>
            therapidhire
          </Text>
          <Text style={styles.name}>
            therapidhire@gmail.com
          </Text>
        </View>
        <View style={styles.header2}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile1')}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 80 }}>
                View Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.iconfoot}>
            <TouchableOpacity onPress={() => { }}>
              <Text style={styles.icon2} >
                <Image
                  source={setting}
                  style={styles.icon}
                />
              </Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
              <Text style={styles.icon2} >
                <Image
                  source={logout}
                  style={styles.icon}
                />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textfoot2}>
            <Text style={styles.textfoot}>
              Setting
            </Text>
            <Text style={styles.textfoot}>
              Logout
            </Text>
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  imageavtar: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "grey",
    marginVertical: 10,
    marginLeft: 20,
    marginTop: -50,
    borderColor: 'black',
    borderWidth: 2,

  },
  Imageback: {
    height: 200,
    width: 250
  },
  footer: {
    marginTop: 270,
    marginLeft: 80
  },
  textfoot: {
    fontSize: 20,
    marginTop: 20
  },
  textfoot2: {
    marginTop: -85
  },
  icon: {
    width: 20,
    height: 20,
    backgroundColor: "#fff",
    marginVertical: 'auto',
    marginLeft: 5,
    marginRight: 10,
    marginTop: 60

  },
  icon2: {
    fontSize: 24,
    marginTop: 20

  },
  iconfoot: {
    marginLeft: -50,
    marginTop: 20
  },
  header: {
    padding: 10,
  },
  header2: {
    backgroundColor: "#B0E0E6",
    margin: 70,
    width: 285,
    height: 50,
    marginLeft: -5,
    marginTop: 10
  },
  changemail: {
    marginTop: 20,
    marginLeft: 20
  },
  name: {
    fontWeight: "bold",
    color: "black"
  },


});