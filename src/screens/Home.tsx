import React, {useCallback } from 'react';
import {View} from 'react-native';
import { MainLayout } from './';

import {connect} from 'react-redux';
import { getHoldings, getCoinMarket } from '../stores/market/marketActions';
import { useFocusEffect } from '@react-navigation/native';
import { FONTS, SIZES, COLORS, icons, dummyData } from '../constants';
import { IconTextButton } from '../components';
import BalanceInfo from '../components/BalanceInfo';

import { holdings } from '../constants/dummy';

type Holding = {
    id: string;
    qty: number;
    total?: number;
};

type HomeProps = {
    getHoldings: Function;
    getCoinMarket: Function;
    myHoldings: Holding[];
    coins: any[];
}

const Home: React.FC<HomeProps> = ({ getHoldings, getCoinMarket, myHoldings, coins }: any) => {

    useFocusEffect(
        useCallback(()=> {
            getHoldings(dummyData.holdings);
            getCoinMarket();
        },[getHoldings, getCoinMarket])
    )
   
    const totalWallet = Array.isArray(myHoldings) && myHoldings.length > 0 
        ? myHoldings.reduce((a,b) => a + (b.total || 0), 0)
        : 0;
    
    const valueChange = Array.isArray(myHoldings) && myHoldings.length > 0
        ? myHoldings.reduce((a, b)=> a + (b.holding_value_change_7d ?? 0),0)
        : 0;
    
    const perChange = valueChange/(totalWallet - valueChange) * 100
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
                    displayAmount={totalWallet}
                    changePct={perChange}
                    containerStyle={{
                        marginTop: 50
                    }}
                />
                
                {/* buttons */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        marginBottom: -15,
                        paddingHorizontal: SIZES.radius
                    }}
                >
                    <IconTextButton
                        label='Transfer'
                        icon={icons.send}
                        containerStyle={{
                            flex: 1,
                            height: 40,
                            marginRight: SIZES.radius
                        }}
                        onPress={() => console.log('Transfer')}
                    />

                    <IconTextButton
                        label='Withdraw'
                        icon={icons.withdraw}
                        containerStyle={{
                            flex: 1,
                            height: 40,
                        }}
                        onPress={() => console.log('Withdraw')}
                    />
                </View>
                
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