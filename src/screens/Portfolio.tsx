import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Portfolio = ({navigation}: any) => {
    return ( 
        <View style={styles.container}>
            <Text>Portfolio</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('profile')}>
                <Text>Navigate to Profile</Text>
            </TouchableOpacity>
        </View>
     );
};

const styles =StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    boxShadow:{
        shadowColor : "#000",
        shadowOffset:{
            width:0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8
    }

})
 
export default Portfolio;
