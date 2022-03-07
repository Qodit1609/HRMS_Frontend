import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
  Image
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import KeyboardStickyView from 'rn-keyboard-sticky-view';
import left2 from './main/assets/images/left2.png';

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
const Apply = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{ flexDirection: 'row' }}>
                    <View style={[{ width: "16%", margin: 10 ,marginVertical:20}]}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image 
                                source={left2}
                                style={styles.menubar}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.dashboard}>Apply Regularize</Text>

                </View>
      <Calendar
        theme={{
          backgroundColor: '#00A4E6',
          calendarBackground: '#00A4E6',
          todayTextColor: '#fff',
          dayTextColor: '#fff',
          textDisabledColor: '#d9e1e8',
          monthTextColor: '#fff',
          arrowColor: '#57B9BB',
          textDayFontWeight: 'bolder',
          textMonthFontWeight: 'bolder',
          textDayHeaderFontWeight: 'bolder',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          selectedDayBackgroundColor: '#fff',
          selectedDayTextColor: '#fff',
          textDayHeaderFontSize: 15,
        }}
        style={styles.calander}
      />
      <View style={styles.reason}>
        <Text style={styles.reasonText}>Reason</Text>

        <TextInput
          style={[styles.card, styles.reasonBox]}
          // onChangeText={text => this.handleText(text)}
          placeholder="Enter Your Reason"
          // value={this.state.text}
        />
        <View style={styles.reasonBtn}>
          <Button
            onPress={() => {
              navigation.navigate('ApplyLeave', {name: 'ApplyLeave'});
            }}
            style={styles.applyButton}
            title="Submit"
            color={"#00A4E6"}
          />
        </View>
      </View>
    </View>
  );
};

export default Apply;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    alignItems: 'center',
    paddingTop: 35,
    backgroundColor: '#ffffff',
  },
  heading: {
    position: 'relative',
    width: 500,
    height: 50,
    padding: 6,
    paddingTop: 10,
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden',
    color: '#000',
    fontSize: 20,
  },
  calander: {
    margin: 10,
    borderWidth: 3,
  },
  reason: {
    paddingTop: 50,
  },
  reasonText: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "900",
  },
  reasonBox: {
    height: 100,
    borderWidth: 3,
    borderRadius: 20,
    fontSize: 20,
    // padding:20,
    margin:20,
    borderColor: '#ccc',
    
  },

  applyButton: {
    borderRadius: 50,
    width: 40,
    padding:20,
    // borderColor:"#00A4E6",
    backgroundColor:"#00A4E6"
  },
  reasonBtn:{
    width:100,
    paddingLeft:30,
    borderRadius:10,
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
