import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { GamePlatform } from '../types';

import styles from './styles';

type Props = {
    platform: GamePlatform;
    onChange: (platfrom: GamePlatform) => void;
    icon: string;
    activePlatform?: GamePlatform;
}


const PlatformCard = ({ 
    platform, 
    onChange, 
    icon,
    activePlatform
}: Props): JSX.Element => {

    const isActive = platform === activePlatform;

    const backgroundColor = isActive ? '#fad7c8' : '#fff';
    const textColor = isActive ? '#ed7947' : '#9e9e9e';

    return (
        <RectButton
            style={[
                styles.platformCard, 
                {backgroundColor: backgroundColor}
            ]}
            onPress={() => onChange(platform)}
        >
            <Icon 
                name={icon} 
                size={60} 
                color={textColor}
            />
            <Text 
                style={[
                    styles.platformCardText, 
                    { color: textColor}
                ]}
            >
                {platform === 'PLAYSTATION' ? 'PS' : platform}
            </Text>
        </RectButton>
    );
}

export default PlatformCard;