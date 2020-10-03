import React from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import Logo from '../../assets/images/logo.png';

const Header = (): JSX.Element => {

    const { navigate } = useNavigation();

    const handleOnPress = () => {
        navigate('Home');
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => handleOnPress()}
        >
            <View style={styles.header}>
                <Image source={Logo}></Image>
                <Text style={styles.textLogo1}>Big Game</Text>
                <Text style={styles.textLogo2}>Survey</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Header;