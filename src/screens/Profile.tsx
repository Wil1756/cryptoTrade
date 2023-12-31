import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { MainLayout } from './';


const Profile = () => {
    return ( 
        <MainLayout>
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        </MainLayout>
     );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow:{
        shadowColor:"#000",
        shadowOffset:{width:0,height:4},
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8
    }
})
 
export default Profile;
