import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { COLORS, icons } from '../constants'; 
import { Home , Market, Portfolio, Profile} from '../screens';
import { TabIcon } from '../components';


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        
        <Tab.Navigator screenOptions={{
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
                        return(
                            <TabIcon
                                focused={focused}
                                icon ={icons.home}
                                label = "Home"
                            />
                        )
                    }
                }}
            />
            <Tab.Screen 
                name="Portfolio" 
                component={Portfolio} 
                options={{
                    tabBarIcon: ({ focused}) => {
                        return(
                            <TabIcon
                                focused={focused}
                                icon ={icons.briefcase}
                                label = "Portfolio"
                            />
                        )
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
                                icon ={icons.trade}
                                label = "Trade"
                                isTrade ={true}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen 
                name="Market" 
                component={Market} 
                options={{
                    tabBarIcon: ({ focused}) => {
                        return(
                            <TabIcon
                                focused={focused}
                                icon ={icons.market}
                                label = "Market"
                            />
                        )
                    }
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarIcon: ({ focused}) => {
                        return(
                            <TabIcon
                                focused={focused}
                                icon ={icons.profile}
                                label = "Profile"
                            />
                        )
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

export default BottomTabs ;
