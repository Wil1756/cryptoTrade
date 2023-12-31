import React, { useEffect } from 'react';
import {View, Animated} from 'react-native';

import { connect } from 'react-redux';

import { IconTextButton } from '../components';
import { COLORS, SIZES, icons } from '../constants';


interface MainLayoutProps {
    children: React.ReactNode;
    isTradeModalVisible: boolean;
  }
  

const MainLayout: React.FC<MainLayoutProps> = ({ children, isTradeModalVisible }) => {
    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isTradeModalVisible){
            Animated.timing(modalAnimatedValue,{
                toValue : 1,
                duration: 500,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(modalAnimatedValue,{
                toValue : 0,
                duration: 500,
                useNativeDriver: false
            }).start();
        }
    },[isTradeModalVisible])

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height - 345],
    })
    return (
        <View style={{ flex:1 }}>
            {children}

            {/* dim background */}
            { isTradeModalVisible && 
            <Animated.View
                style={{
                    position: 'absolute',
                    top:0,
                    left:0,
                    right:0,
                    bottom:0,
                    backgroundColor: COLORS.transparentBlack,
                    opacity : modalAnimatedValue
                }}
            />
            }

            {/* modal */}
            <Animated.View
                style={{
                    position: "absolute",
                    left: 0,
                    top: modalY,
                    width: "100%",
                    padding: SIZES.padding,
                    backgroundColor: COLORS.primary

                }}
            >
                <IconTextButton 
                    label="Transfer"
                    icon={icons.send}
                    onPress={()=> console.log("Transfer")}
                />
               
                <IconTextButton
                    label="Withdraw"
                    icon={icons.withdraw}
                    containerStyle={{
                        marginTop: SIZES.base
                    }}
                    onPress={()=> console.log("Withdraw")}
                />


            </Animated.View>
        </View>
     );
}
 
// export default MainLayout;


const mapStateToProps = (state: {tabReducer: {isTradeModalVisible: boolean}})=>({
    isTradeModalVisible: state.tabReducer.isTradeModalVisible
});


const mapDispatchToProps = (dispatch: any) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);