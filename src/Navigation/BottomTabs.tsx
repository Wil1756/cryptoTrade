import React from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import { setTradeModalVisibility } from '../stores/tab/tabActions';

import { COLORS, icons } from '../constants'; 
import { Home , Market, Portfolio, Profile} from '../screens';
import { TabIcon } from '../components';


const Tab = createBottomTabNavigator();

interface TabBarCustomButtonProps {
    children : React.ReactNode;
    onPress: ()=> void;
}


interface BottomTabsProps {
    setTradeModalVisibility: (isVisible: boolean) => void;
    isTradeModalVisible: boolean;
}

const TabBarCustomButton: React.FC<TabBarCustomButtonProps> = ({children, onPress}) => {
    return(
        <TouchableOpacity 
            style={{ 
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center'
            }}
            onPress={onPress}
            >
            {children}
        </TouchableOpacity>
    );
}

const BottomTabs: React.FC<BottomTabsProps> = ({ setTradeModalVisibility, isTradeModalVisible}) => {

    function tradeTabButtonOnclickHandler(){
        setTradeModalVisibility(!isTradeModalVisible)
    }

    return (
        
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle :{
                height: 140,
                backgroundColor: COLORS.primary, 
                borderTopColor: 'transparent'
            }}}>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ focused}) => {
                        if (!isTradeModalVisible){
                            return(
                                <TabIcon
                                    focused={focused}
                                    icon ={icons.home}
                                    label = "Home"
                                />
                            )
                        }
                    }
                }}
                listeners={{
                    tabPress: e=> {
                        if (isTradeModalVisible){
                            e.preventDefault()
                        }
                    }
                }} 
            />
            <Tab.Screen 
                name="Portfolio" 
                component={Portfolio} 
                options={{
                    tabBarIcon: ({ focused}) => {
                        if (!isTradeModalVisible){
                            return(
                                <TabIcon
                                    focused={focused}
                                    icon ={icons.briefcase}
                                    label = "Portfolio"
                                />
                            )
                        }
                    }
                }}
                listeners={{
                    tabPress: e=> {
                        if (isTradeModalVisible){
                            e.preventDefault()
                        }
                    }
                }}
            />
            <Tab.Screen 
                name="Trade" 
                component={Home} 
                options={{
                    tabBarIcon: ({ focused}) => {
                            return(
                                <TabIcon
                                    focused={focused}
                                    icon ={isTradeModalVisible ? icons.close : icons.trade}
                                    iconStyle={isTradeModalVisible ? {
                                        width: 30,
                                        height: 30,
                                    }: null}
                                    label = "Trade"
                                    isTrade ={true}
                                />
                            )
                    },
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                            onPress= {()=> tradeTabButtonOnclickHandler()}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Market" 
                component={Market} 
                options={{
                    tabBarIcon: ({ focused}) => {
                        if (!isTradeModalVisible){
                            return(
                                <TabIcon
                                    focused={focused}
                                    icon ={icons.market}
                                    label = "Market"
                                />
                            )
                        }
                    }
                }}
                listeners={{
                    tabPress: e=> {
                        if (isTradeModalVisible){
                            e.preventDefault()
                        }
                    }
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarIcon: ({ focused}) => {
                        if (!isTradeModalVisible){
                            return(
                                <TabIcon
                                    focused={focused}
                                    icon ={icons.profile}
                                    label = "Profile"
                                />
                            )
                        }    
                    }
                }}
                listeners={{
                    tabPress: e=> {
                        if (isTradeModalVisible){
                            e.preventDefault()
                        }
                    }
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})


const mapStateToProps = (state: {tabReducer: {isTradeModalVisible: boolean}})=>({
    isTradeModalVisible: state.tabReducer.isTradeModalVisible
});


const mapDispatchToProps = (dispatch: any) => ({
    setTradeModalVisibility: (isVisible: boolean) => dispatch(setTradeModalVisibility(isVisible))
})


export default connect(mapStateToProps, mapDispatchToProps)(BottomTabs);