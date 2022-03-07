import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

import LogImg from './main/assets/images/login.png';

import Dialog, {SlideAnimation, DialogContent} from 'react-native-popup-dialog';
import KeyboardStickyView from 'rn-keyboard-sticky-view';

const Login = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');

 
  return (
    <View style={styles.container}>
      <Image source={LogImg} />
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.paragrph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </Text>
      <KeyboardStickyView style={styles.butPadding}>
        <TextInput
          style={styles.email}
          value={value}
          onChangeText={setValue}
          placeholder="Please enter your email ID"
          placeholderTextColor="#1B1A40"
        />
        <Pressable style={styles.otp} onPress={() => setModalVisible(true)}>
          <Text style={styles.otpButton}>Get OTP</Text>
        </Pressable>
        <Dialog
          dialogAnimation={
            new SlideAnimation({
              slideFrom: 'bottom',
            })
          }
          visible={modalVisible}
          onTouchOutside={() => setModalVisible(false)}>
          <DialogContent>
            <TouchableOpacity
              style={styles.modalHeaderCloseText}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            <View style={styles.popupHead}>
              <Text style={styles.popup}>Verification Code</Text>
              <Text style={styles.popupText}>
                Enter the 4 digit code that you received on your registered
                email.
              </Text>
              <View style={styles.inputBox}>
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
              </View>

              <TouchableOpacity
                onPress={() =>{
                  setModalVisible(false)
                  navigation.navigate('drawer', {name: 'drawer'})
                }
                }>
                <View>
                  <Text style={styles.inputButton}>Continue</Text>
                </View>
              </TouchableOpacity>
            </View>
          </DialogContent>
        </Dialog>
      </KeyboardStickyView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00A4E6',
  },
  heading: {
    paddingTop: 0,
    fontSize: 36,
    color: '#fff',
  },
  paragrph: {
    color: '#ccc',
    paddingTop: 0,
    textAlign: 'center',
    fontSize: 20,
  },
  email: {
    backgroundColor: '#fff',
    width: 250,
    textAlign: 'center',
    paddingBottom: 15,
    borderRadius: 10,
  },
  otp: {
    width: 250,
    borderRadius: 20,
    border: '#fff',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: '#00A4E6',
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
  },
  otpButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    backgroundColor: '#00A4E6',
  },
  popupHead: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  popup: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  popupText: {
    marginTop: 20,
    alignItems: 'center',
    fontWeight: '700',
    fontSize: 18,
    justifyContent: 'center',
  },
  inputBox: {
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: '#ccc',
    borderRadius: 5,
  },
  inputButton: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    letterSpacing: 2,
    color: 'white',
    backgroundColor: '#00A4E6',
  },
  modalHeaderCloseText: {
    alignItems: 'flex-end',
    marginTop: 5,
  },
  closeText: {
    color: '#000',
    borderRadius: 20,
    fontSize: 20,
    padding: 10,
  },
});

export default Login;
