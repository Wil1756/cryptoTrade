import React, { useCallback } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { MainLayout } from './';


import {connect} from 'react-redux';
import { getHoldings, getCoinMarket } from '../stores/market/marketActions';
import { useFocusEffect } from '@react-navigation/native';
import { FONTS, SIZES, COLORS, icons, dummyData } from '../constants';
import BalanceInfo from '../components/BalanceInfo';

const Home = ({ getHoldings, getCoinMarket, myHoldings, coins }: any) => {

    useFocusEffect(
        useCallback(()=> {
            getHoldings(dummyData.holdings);
            getCoinMarket();
        },[])
    )

    function renderTradeInfo(){
        return (
            <View style={{
                paddingHorizontal: SIZES.padding,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                backgroundColor: COLORS.gray
            }}>
                {/* balance section */}
                <BalanceInfo
                    title="Your Wallet"
                    displayAmount="45.00"
                    changePct={2.30}
                    containerStyle={{
                        marginTop: 50
                    }}
                />
            </View>
        )
    }
    return ( 
        <MainLayout>
            <View style={{
                flex: 1,
                backgroundColor: COLORS.black
            }}>
                {/* header - wallet info */}
                {renderTradeInfo()}

                {/* chart */}

                {/* buttons */}
            </View>
        </MainLayout>
       
    );
};

 
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