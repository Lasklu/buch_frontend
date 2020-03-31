import React from 'react';
import {View, ListView, FlatList, StyleSheet, Text, Image, TouchableHighlight, Dimensions} from 'react-native';
import {Button} from 'react-native-elements'

import CustomRow from './customRow';
import {IconButton} from 'react-native-paper';
import Ionicons from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from "react-native-gesture-handler";
import Colors from "../../constants/Colors";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    containerListView: {
        flex: 1,
    },
    container: {
    },
    overcontainer: {

    },
    btncontainer: {

    },
    buttonContainer: {
        flexDirection: "row-reverse",
        flex: 1,
    },
    title: {
        fontSize: 16,
        color: '#ffffff',
    },
    container_text: {
        flex: 2,
        flexDirection: 'column',
        marginLeft: 7,
        justifyContent: 'center',
        color: '#ffffff',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
        color: '#ffffff',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

const CustomListview = ({itemList}) => (
    <View style={styles.container}>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={itemList}
            renderItem={({item}) =>
                    <View style={{ shadowColor: "#000",
                        shadowOffset: {
                            width: 2,
                            height: 3,
                        },
                        shadowOpacity: 0.8,
                        shadowRadius: 4,

                        elevation: 18,}}>
                        <View style={{justifyContent:'flex-end', marginBottom:15, overflow:'hidden', marginLeft:15, height:viewportHeight/5,width:viewportWidth/2.5, borderWidth:1, borderColor:'transparent', borderRadius:18,}}>
                            <Image source={require('../../assets/images/rest2.jpg')} resizeMethod={'cover'} style={{width:null,height:null, flex:1}}/>
                            <View style={{flex:0.5, justifyContent:'center',height:'28%', position:'absolute', backgroundColor:'white', width:'100%'  }}>
                            <Text style={{marginLeft:'12%',fontSize:17, fontWeight:'400', color:Colors.tabIconSelected}}>Thriller</Text>
                            </View>
                        </View>
                    </View>
            }
        />
    </View>
);


export default CustomListview;
