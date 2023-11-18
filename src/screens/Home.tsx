import React, { useCallback } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { MainLayout } from './';


import {connect} from 'react-redux';
import { getHoldings, getCoinMarket } from '../stores/market/marketActions';
import { useFocusEffect } from '@react-navigation/native';
import { FONTS, SIZES, COLORS, icons, dummyData } from '../constants';

const Home = ({ getHoldings, getCoinMarket, myHoldings, coins }: any) => {

    useFocusEffect(
        useCallback(()=> {
            getHoldings(dummyData.holdings);
            getCoinMarket();
        },[])
   )
    return ( 
        <MainLayout>
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        </MainLayout>
       
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
   },
   boxShadow:{
    shadowColor:'#000',
       shadowOffset:{width:0, height:4},
       shadowOpacity: 0.30,
       shadowRadius: 4.65,
       elevation: 8
   },

})
 
// export default Home;

const mapStateToProps = (state: any)=> {
    return {
        myHoldings: state.marketReducer.myHoldings,
        coins: state.marketReducer.coins
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        getHoldings: (
            holdings: { id: string; qty: number }[],
            currency: string,
            orderBy: string,
            sparkline: boolean,
            priceChangePerc: string,
            perPage: number,
            page: number
        ) => {
            return dispatch(getHoldings(
                holdings,
                currency,
                orderBy,
                sparkline,
                priceChangePerc,
                perPage,
                page
            ));
        },
        getCoinMarket: (
            currency: string,
            orderBy: string,
            sparkline: boolean,
            priceChangePerc: string,
            perPage: number,
            page: number
        ) => {
            return dispatch(getCoinMarket(
                currency,
                orderBy,
                sparkline,
                priceChangePerc,
                perPage,
                page
            ));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);