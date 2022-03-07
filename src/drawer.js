import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text, TouchableOpacity, style, StyleSheet, Dimensions, SafeAreaView, Image, Connected, dateString, days } from 'react-native';
import { Card } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SceneMap } from 'react-native-tab-view';
import DropShadow from "react-native-drop-shadow";

import avatar from './main/assets/images/avatar3.jpg';
import attendance from './main/assets/images/attendance.png';
import leave from './main/assets/images/leave.png';
import punchinout from './main/assets/images/punchinout.png';
import home from './main/assets/images/home.png';
import file from './main/assets/images/file.png';
import cloud from './main/assets/images/cloud.png';
import clean from './main/assets/images/clean.png';
import pending from './main/assets/images/pending.png';
import CustomDrawer from './CustomDrawer';

const AttendanceRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const LeaveRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);

const EditRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]} />
);
const ConnectionRoute = () => (
  <View style={{ backgroundColor: Connected ? 'green' : 'red' }} />
);




const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  Attendance: AttendanceRoute,
  Leave: LeaveRoute,
  Edit: EditRoute,
  Connection: ConnectionRoute,
});
function HomeScreen({ navigation }) {

  const [visible, setVisible, setModalVisible, ModalVisible] = useState(false);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Attendance', title: 'Attendance' },
    { key: 'Leave', title: 'Leave' },
    { key: 'Edit', title: 'Edit' },
    { key: 'Connection', title: 'Connection' },
  ]);
  const [currentDate, setcurrentDate, displayTime] = React.useState('')
  const [btnView, setBtnView] = React.useState('hidden')

  React.useEffect(() => {

    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dayName = days[new Date().getDay()];
    var month = ["Jan", "Feb", "March", "April", "May", "Jun", "July", "Aug", "sep", "oct", "Nov", "Dec"];
    var monthName = month[new Date().getMonth()];
    var localTime = new Date();
    var month = localTime.getMonth() + 1;
    var date = localTime.getDate();
    var year = localTime.getFullYear();
    var hours = localTime.getHours();
    var minutes = localTime.getMinutes();
    var seconds = localTime.getSeconds();

    setcurrentDate(
      dayName + "," + date + " " + monthName + " " + year + "    \n        " + hours + ":" + minutes + ":" + seconds + ""
    );

  })
  const punchInClicked = (btnName) => {
    if (btnName === 'punchIn') {
      setBtnView('show')
    }
    else {
      setBtnView('hidden')
    }
  }

  const detectPunchIn = () => {
    if (btnView !== 'hidden') {
      return (<View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <View style={styles.break}>
        <Button   title="Break" onPress={() => { punchInClicked('showAlert') }}></Button>
        </View>
        <View style={styles.break}>
        <Button  title="PUNCH-OUT" onPress={() => { punchInClicked('punchOut') }}></Button>
        </View>
      </View>)
    } else {
      return (
        <View style={styles.punchinbuttn} >
          <Button
            title="PUNCH-IN"
            onPress={() => { punchInClicked('punchIn') }}
          />
        </View>
      )
    }

  }

  return (
    <><SafeAreaView>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.dashboard}>Dashboard</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer({ NotificationsScreen })}>
          <Image
            style={styles.imageavtar}
            source={avatar} />
        </TouchableOpacity>
      </View>

      <View
        style={styles.Connected}>
      </View>

      <View style={styles.card1}>
        <View >
          <View >
            <Text style={styles.textcurrent}>
              {currentDate}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <View >
            <Text style={{ fontSize: 15, fontWeight: "bold",marginLeft: 20 }}>Clock-In_Time</Text>

          </View>
          <View>
            <Text style={{ fontSize: 15, marginLeft:60, fontWeight: "bold" }}>Clock-Out_Time</Text>

            <View />
          </View>
        </View>

        {detectPunchIn()}

      </View>

      <View >
        <TouchableOpacity onPress={() => { alert("this is attendance ") }}>
          <View style={styles.card3}>
            <View style={{ flexDirection: "row" }}><Image
              source={pending}
              style={styles.attendance}
            />
              <Text style={styles.textattendance}>
                Pending Request
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View >
        <TouchableOpacity onPress={() => {
            navigation.navigate('Attendance', { name: 'Attendance' });
          }}>
          <View style={styles.card3}>
            <View style={{ flexDirection: "row" }}><Image
              source={attendance}
              style={styles.attendance}
            />
              <Text style={styles.textattendance}>
                Attendance
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LeaveBalance', { name: 'LeaveBalance' });
          }}>
          <View style={styles.card3}>
            <View style={{ flexDirection: "row" }}><Image
              source={leave}
              style={styles.leave} />
              <Text style={styles.textleave}>
                Leave
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", marginTop: 110 }}>
        <View style={{}}>
          <TouchableOpacity onPress={() => { }}><Image
            source={home}
            style={styles.home}
          />
          </TouchableOpacity>

        </View><View style={{ marginLeft: 70 }}>
          <TouchableOpacity onPress={() => { }}><Image
            source={file}
            style={styles.file}
          />
          </TouchableOpacity>
        </View><View style={{ marginLeft: 70 }}>
          <TouchableOpacity onPress={() => { }}><Image
            source={cloud}
            style={styles.cloud}
          />
          </TouchableOpacity>
        </View><View style={{ marginLeft: 70 }}>
          <TouchableOpacity onPress={() => { }}><Image
            source={clean}
            style={styles.clean}
          />
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
    </>

  );
};
function NotificationsScreen({ navigation }) {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    navigation.dispatch(navigateAction);
  };
  return (
    <View></View>
  );
}
const Drawer = createDrawerNavigator();
export default function App() {
  return (

    <Drawer.Navigator drawerContent={props => <CustomDrawer{...props} />} screenOptions={{
      headerShown: false,
    }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />

    </Drawer.Navigator>

  );
}

const styles = StyleSheet.create({

  scene: {
    flex: 1,
  },
  card: {
    flex: 1,
    flexDirection: "row",
  
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  punchoutbuttn: {

    marginBottom: 20,
    padding: 30
  },
  buttonspace: {
    width: 50,
    height: 20,
  },
  menubar: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 10
  },
  imageavtar: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "grey",
    marginVertical: 10,
    marginLeft: -250,
    borderColor: 'black',
    borderWidth: 2,

  },
  Connected: {
    marginLeft: 60,
    marginTop: -25,
    width: 20,
    height: 20,
    backgroundColor: Connected ? 'green' : 'red',
    borderRadius: 20 / 2,
    borderColor: 'black',
    borderWidth: 2,
  },
  textcurrent: {
    fontSize: 20,
    marginLeft: 70,
    marginTop: 10,
    fontWeight: "bold"
  },
  attendance: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 10
  },
  textattendance: {
    fontSize: 20,
    marginLeft: 1,
    marginTop: 10,
    fontWeight: "bold",
  },
  leave: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 10
  },
  textleave: {
    fontSize: 20,
    marginLeft: 1,
    marginTop: 10,
    fontWeight: "bold",
  },
  home: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: -1,
    marginRight: 10
  },
  file: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: -1,
    marginRight: 10
  },
  cloud: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: -1,
    marginRight: 10
  },
  clean: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: -1,
    marginRight: 10
  },
  dashboard: {
    marginLeft: 100,
    fontSize: 30,
    padding: 10,
    marginTop: 10,
  },
  punchinbuttn: {
    marginTop: 60,
  },
  modalHeaderCloseText: {
    alignItems: 'flex-end',
    marginTop: 0,
  },
  closeText: {
    color: 'blue',
    borderRadius: 20,
    fontSize: 20,
    padding: 10,
    marginTop: 10,
  },
  break: {
    // backgroundColor: "#DDDDDD",
    width:155,
    height:50,
    marginTop:30
    
  },
  card3: {

    borderWidth: 6,
    borderRadius: 10,
    borderColor: 'white',
    width: '90%',
    height: 70,
    padding: 0,
    backgroundColor: "white",
    marginTop: 30,
    marginLeft: '5%',
    shadowColor: '#171717',
    
    
},
card1: {

  borderWidth: 6,
  borderRadius: 10,
  borderColor: 'white',
  width: '90%',
  height: 220,
  padding: 0,
  backgroundColor: "white",
  marginTop: 30,
  marginLeft:' 5%',
},


});