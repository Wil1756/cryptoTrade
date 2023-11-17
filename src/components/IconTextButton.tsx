import React from 'react';
import { Text, TouchableOpacity, Image, ViewStyle, ImageSourcePropType } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

interface IconButtonProps {
  icon: any;
  label: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const IconTextButton: React.FC<IconButtonProps> = ({ icon, containerStyle, onPress, label }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        resizeMode='contain'
        style={{
          width: 20,
          height: 20,
        }}
      />

      <Text
        style={{
          marginLeft: SIZES.base,
          ...FONTS.h3,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default IconTextButton;
