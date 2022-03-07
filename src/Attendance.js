import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {FlatGrid, SectionGrid} from 'react-native-super-grid';
import left2 from './main/assets/images/left2.png';
import { ScrollView } from 'react-native-gesture-handler';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thuresday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  dayNamesShort: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

const createTwoButtonAlert = () =>
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

const Attendance = ({ navigation }) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [items, setItems] = React.useState([
    {name: 'Working Days', code: 'N/A'},
    {name: 'Present', code: 7},
    {name: 'Absent', code: 0},
    {name: 'Leave', code: 0},
    {name: 'Holiday', code: 0},
    {name: 'Paid Days', code: 'N/A'},  
  ]);

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
                    <View style={[{ width: "16%", margin: 10 ,marginVertical:20}]}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image 
                                source={left2}
                                style={styles.menubar}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.dashboard}>Apply Leave</Text>

                </View>
      <Text style={styles.headingSummary}>Summary</Text>
      <FlatGrid
        itemDimension={100}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={1}
        renderItem={({item}) => (
          <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
        )}
      />
      <View>
        <Calendar
          onPress={createTwoButtonAlert}
          theme={{
            calendarBackground: '#00A4E6',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#fff',
            dayTextColor: '#fff',
            textDisabledColor: '#d9e1e8',
            dotColor: '#fff',
            selectedDotColor: '#ffffff',
            arrowColor: '#fff',
            borderColor: '#fff',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'blue',
            indicatorColor: 'blue',
            monthTextColor: '#fff',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          style={styles.calander}
        />
        <View style={[{width: '100%', padding: 15}]}>
          <Button
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('Apply', {name: 'Apply'});
            }}
            style={styles.applyButton}
            title="Apply Regularize"
            color="#00A4E6"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={[{width: '100%', padding: 15}]}>
          <Button
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('ApplyLeave', {name: 'ApplyLeave'});
            }}
            style={styles.applyLeaveButton}
            title="Apply Leave"
            color="#00A4E6"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    position: 'relative',
    width: 500,
    height: 50,
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden',
    color: '#000',
    fontSize: 25,
  },
  headingSummary: {
    position: 'relative',
    width: 500,
    height: 40,
    padding: 6,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden',
    color: 'blue',
    fontSize: 18,
  },
  text: {
    textAlign: 'center'
  },
  calander: {
    backgroundColor: '#00A4E6',
    margin: 10,
    borderWidth: 1,
    color: '#fff',
  },
  textStyle: {
    marginTop: 10,
  },
  titleStyle: {
    fontSize: 20,
    margin: 20,
  },
  applyButton: {
    borderRadius: 20,
  },
  gridView: {
    marginTop: 10,
    flex: 1,
    borderColor:'#000',    
    borderRadius: 5,
    backgroundColor:'#fff'
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 8, 
    height: 60,
    borderColor:'#000',    

  },
  itemName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    borderColor:'#000', 
    marginLeft:5   

  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#000',
    marginTop:10,
    marginLeft:20
  },
  menubar: {
    width: 40,
    height: 20,
    marginVertical: 'auto',
    marginLeft: 5,
    marginRight: 10,
},
dashboard: {
  fontSize: 30,
  padding: 10,
  marginTop: 0,
},
});
