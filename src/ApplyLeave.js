import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
// import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import left2 from './main/assets/images/left2.png';

const ApplyLeave = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={[{ width: "16%", margin: 10, marginVertical: 20 }]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={left2}
              style={styles.menubar}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.dashboard}>Apply Leave</Text>

      </View>
      <TouchableWithoutFeedback>
        <View style={styles.mainCardView}>
          <View>
            <Text style={styles.leaveType}>Leave Type*</Text>
            <View style={styles.dropdownStyle}>
              <ModalDropdown
                options={['Medical Leave', 'Vaccation', 'Emergency']}
                defaultValue={'Medical Leave'}
                style={{
                  flex: 1,
                  borderBottomWidth: 2,
                  backgroundColor: '#ccc',
                  margin: 5,
                  padding: 5,
                  fontSize: 25,
                }}
                textStyle={{ fontWeight: 'bold', textAlign: 'right' }}
                dropdownStyle={{ width: 170 }}
              />
              <View style={{ position: 'absolute', right: 10, top: 10 }}>
                <Text>▼</Text>
              </View>
            </View>
            <View>
              <Text style={styles.leaveType}>Date*</Text>
              <View style={{ flex: 1, alignSelf: 'stretch' }}>
                <View>
                  <Button onPress={showDatepicker} title="Show date picker!" />
                </View>
                <View>
                  <Button onPress={showTimepicker} title="Show time picker!" />
                </View>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
                {/* <DatePicker
                  style={{width: 200}}
                  // date={this.state.date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2016-05-01"
                  maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 36,
                    },
                  }}
                /> */}
              </View>
              {/* <DatePicker
                style={{width: 350, height: 45, padding:10, margin:10}}
                customStyles={{
                  placeholderText: {fontSize: 20}, 
                  // contentInput: {y}, 
                 
                }} // optional
                placeholder={'Please Enter Range'}
                centerAlign // optional text will align center or not
                allowFontScaling={false} // optional
                
                mode={'range'}
              /> */}
            </View>
            <View style={styles.reason}>
              <Text style={styles.reasonText}>Reason</Text>

              <TextInput
                style={[styles.card, styles.reasonBox]}
                placeholder="Enter Your Reason"
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.reasonBtn}>
        <Button style={styles.applyButton} title="Submit" color={'#00A4E6'} />
      </View>
    </View>
  );
};

export default ApplyLeave;

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
  mainCardView: {
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 30,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  leaveType: {
    paddingTop: 20,
    fontSize: 20,
    paddingBottom: 10,
  },
  leaveTypeDrop: {
    // paddingTop: 10,
    fontSize: 20,
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
    fontWeight: '900',
  },
  dropdownStyle: { height: 40, alignItems: 'center', flexDirection: 'row' },

  reason: {
    paddingTop: 20,
  },
  reasonText: {
    fontSize: 20,
    fontWeight: '600',
  },
  reasonBox: {
    height: 100,
    borderWidth: 3,
    borderRadius: 20,
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    borderColor: '#ccc',
  },

  applyButton: {
    borderRadius: 50,
    width: 40,
    padding: 20,
    // borderColor:"#00A4E6",
    backgroundColor: '#00A4E6',
    borderRadius: 20,
  },
  reasonBtn: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    paddingTop: 60,
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
