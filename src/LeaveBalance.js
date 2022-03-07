import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, header, ScrollViewComponent } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import DropdownMenu from 'react-native-dropdown-menu';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';

import left2 from './main/assets/images/left2.png';
import { Card } from 'react-native-elements/dist/card/Card';
import { color } from 'react-native-reanimated';




const holidayList = [
    { date: '01-Jan-2022', holidayName: 'New Year' },
    { date: '26-Jan-2022', holidayName: 'Republic Day of India' },
    { date: '18-Mar-2022', holidayName: 'Holi' },
    { date: '22-Mar-2022', holidayName: 'Rangpanchami' },
    { date: '11-Aug-2022', holidayName: 'Rakshabandhan' },
    { date: '15-Aug-2022', holidayName: 'Independecne Day of India' },
    { date: '5-Oct-2022', holidayName: 'Dussehra' },
    { date: '22-Oct-2022', holidayName: 'Diwali' },
    { date: '23-Oct-2022', holidayName: 'Diwali' },
    { date: '24-Oct-2022', holidayName: 'Diwali' },
    { date: '25-Oct-2022', holidayName: 'Diwali' },
    { date: '26-02-2022', holidayName: 'Work From Home' },
    { date: '31-Dec-2022', holidayName: 'New Year Eve' },]

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];

    
const FirstRoute = () => {
const [value, setValue] = useState(null);
    return(
<View>
        <View style={styles.card1}>
            <View style={{marginLeft:200,marginTop:-5}}>
            <Dropdown
        style={styles.dropdown}
        // placeholderStyle={styles.placeholderStyle}
        // selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder=" "
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
       
      />
                {/* <Text style={{ fontSize: 25, marginTop: 20, marginLeft: 15, fontWeight: "bold" }}>
                    Contractor Leave
                </Text> */}
                
                </View><View>
                <Text style={{ fontSize: 25, marginTop: -70, marginLeft:7, fontWeight: "bold" }}>
                    Contractor Leave
                </Text>
            </View>
            <View>

                <Text style={styles.text3}>
                    2.00</Text>
                <Text style={styles.text4}>
                    Currently Available  </Text></View>

            <View style={{ marginTop: 60 }}>
                <View style={{
                    borderBottomColor: 'black',

                    borderWidth: 0.5,
                    width: '100%',
                    marginLeft: '0.5%',
                    marginTop: -50

                }}>
                    <></>
              </View>
              <View style={styles.cardleave}>

                     <Text style={styles.leavetext}>
                         1.0
                    </Text>
                     <Text style={styles.leavetext2}>
                         Added this month
                     </Text>

                </View>
                <View style={styles.cardleave} >

                     <Text style={styles.leavetext}>
                         1.00
                     </Text >
                     <Text style={styles.leavetext2} >
                        Carry forward
                    </Text>

                </View>
                <View style={styles.cardleave} >

                    <Text style={styles.leavetext}>
                       12.00
                   </Text>
                   <Text style={styles.leavetext2}>
                        year-end balance
                    </Text>

                 </View>
            </View>
       </View>
    </View>
)
}


// const FirstRoute = () => (
//     <View>
//         <View style={styles.card1}>
//             <View>
//                 <Text style={{ fontSize: 25, marginTop: 20, marginLeft: 15, fontWeight: "bold" }}>
//                     Contractor Leave
//                 </Text>
//             </View>
//             <View>

//                 <Text style={styles.text3}>
//                     2.00</Text>
//                 <Text style={styles.text4}>
//                     Currently Available  </Text></View>

//             <View style={{ marginTop: 60 }}>
//                 <View style={{
//                     borderBottomColor: 'black',

//                     borderWidth: 0.5,
//                     width: 300,
//                     marginLeft: 15,
//                     marginTop: -50

//                 }}>
//                     <></>
//               </View>
//               <View style={styles.cardleave}>

//                      <Text style={styles.leavetext}>
//                          1.0
//                     </Text>
//                      <Text style={styles.leavetext2}>
//                          Added this month
//                      </Text>

//                 </View>
//                 <View style={styles.cardleave} >

//                      <Text style={styles.leavetext}>
//                          1.00
//                      </Text >
//                      <Text style={styles.leavetext2} >
//                         Carry forward
//                     </Text>

//                 </View>
//                 <View style={styles.cardleave} >

//                     <Text style={styles.leavetext}>
//                        12.00
//                    </Text>
//                    <Text style={styles.leavetext2}>
//                         year-end balance
//                     </Text>

//                  </View>
//             </View>
//        </View>
//     </View>
//  );

const SecondRoute = () => (
    <ScrollView>
        <View style={styles.holiday}>

            {holidayList.map(item => (
                <>
                    <View style={styles.listcard}>
                        <Text  style={{marginLeft:10}}>
                            {item.date}
                        </Text>
                    </View>
                    <View style={styles.listcard2}>
                        <Text style={{marginLeft:30}}>
                            {item.holidayName}
                        </Text>
                    </View>
                </>
            ))}
        </View>
    </ScrollView>
);


const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function BalanceLeave({ navigation: { goBack } }) {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Leave  Balance' },
        { key: 'second', title: 'List Of Holiday' },
    ]);


    return (

        <>
           <View style={{ flexDirection: 'row'}}>
                    <View style={[{ width: "16%", margin: 10 ,marginVertical:20}]}>
                        <TouchableOpacity onPress={() => goBack()} title="Go back from ProfileScreen">
                            <Image 
                                source={left2}
                                style={styles.menubar}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.leave}>Leave</Text>

                </View>

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }} />
        </>

    );
}



const styles = StyleSheet.create({
    menubar: {
        width: 40,
        height: 40,
        marginVertical: 'auto',
        marginLeft: 5,
        marginRight: 10,
    },
    profile: {
        fontSize: 30,
        padding: 10,
        marginTop: 10,
    },
    card1: {

        borderWidth: 6,
        borderRadius: 10,
        borderColor: 'white',
        width: '90%',
        height: 420,
        padding: 0,
        backgroundColor: "white",
        marginTop: 30,
        marginLeft:'5%'
    },
    cardleave: {
        borderWidth: 1,
        borderRadius: 20,
        height: '25%',
        width: '100%',
        marginTop: 10,
        marginLeft: "0.5%",
    },
    text3: {
        marginTop: 30,
        marginLeft: 15,
    },
    text4: {
        marginLeft: 90,
        marginTop: -18,
        color: "lightgray"
    },
    leavetext: {
        marginLeft: 10,
        marginTop: 20,
        color: "lightgray"
    },
    leavetext2: {
        marginLeft: 80,
        fontSize: 20,
        marginTop: -22,
        color: "lightgray"

    },
    listcard: {
        width: 110,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#00A4E6",
        marginLeft: 5,
        flex: 1,
        justifyContent: 'space-evenly',
        marginTop: 10

    },
    listcard2: {
        width: 250,
        height: 50,
        borderRadius: 5,
        backgroundColor: "white",
        marginLeft: 130,
        marginTop: -50,
        flex: 1,
        justifyContent: 'space-evenly'
    },
    holiday: {
        marginTop: 10,
        flex: 1,
        justifyContent: 'space-evenly'
    },
    leave: {
        marginLeft: 50,
        fontSize: 30,
        padding: 10,
        marginTop: 5,
      },
      menubar: {
        width: 40,
        height: 20,
        marginVertical: 'auto',
        marginLeft: 5,
        marginRight: 10,
        marginTop:5
    },
    dropdown: {
        // margin: 16,
        marginLeft:'-185%',
        width:'290%',
        height: 100,
        backgroundColor: 'white',
        // borderRadius: 12,
        // padding: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
        //   height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
  
        elevation: 2,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
});

