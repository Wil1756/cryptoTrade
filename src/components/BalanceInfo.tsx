import React from 'react';
import {View , Text, Image} from 'react-native';

import {SIZES, FONTS, icons, COLORS} from '../constants';


interface BalanceInfoProps {
    title: string;
    displayAmount: string | number;
    changePct: number;
    containerStyle?: any;
}

const BalanceInfo: React.FC<BalanceInfoProps> = ({title, displayAmount, changePct, containerStyle}) => {
    return ( 
        <View style={{...containerStyle}}>
            {/* title */}
            <Text style={{...FONTS.h3, color: COLORS.lightGray2}}>{title}</Text>
            {/* figures */}
            <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'}}>
                <Text style={{
                    ...FONTS.h3, 
                    color: COLORS.lightGray2
                }}>$</Text>
                <Text>&nbsp;</Text>
                <Text style={{
                    ...FONTS.h2,
                    marginLeft: SIZES.base,
                    color: COLORS.white
                }}>{displayAmount.toLocaleString()}</Text>
                <Text style={{
                    color: COLORS.lightGray2,
                    ...FONTS.h3
                }}>USD</Text>
            </View>

            {/* {percentage change} */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end'
            }}>
                { changePct !== 0 && 
                <Image
                    source={icons.upArrow}
                    style={{
                        width: 10,
                        height:10,
                        alignSelf: 'center',
                        tintColor: (changePct > 0 ) ? COLORS.lightGreen: COLORS.red,
                        transform: (changePct > 0) ? [{rotate: '45deg'}] : [{rotate:'125deg'}]
                    }}
                />
                }

                <Text style={{
                    marginLeft: SIZES.base,
                    alignSelf: 'flex-end',
                    color: (changePct === 0) ? COLORS.lightGreen: COLORS.red,
                    ...FONTS.h4

                }}>
                    {changePct.toFixed(2)}%
                </Text>
            </View>

        </View>
     );
}
 
export default BalanceInfo;

