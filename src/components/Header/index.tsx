import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

import Logo from '../../assets/images/logo.png';

const Header = (): JSX.Element => {
    return (
        <View style={styles.header}>
            <Image source={Logo}></Image>
            <Text style={styles.textLogo1}>Big Game</Text>
            <Text style={styles.textLogo2}>Survey</Text>
        </View>
    );
};

export default Header;