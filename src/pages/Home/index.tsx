import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import { Text, View, Image , ScrollView} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import Gamer from '../../assets/images/gamer.png';

import styles from './styles';

const Home = () => {

    const { navigate } = useNavigation();

    const HandleOnPress = (): void => {
        navigate('CreateRecord')
    }

    return (
        <ScrollView>  
            <Header />
            <View style={styles.container}>
                <Image 
                    source={Gamer} 
                    style={styles.gamerImage} 
                />
                <Text style={styles.title}>Vote agora!</Text>
                <Text style={styles.subTitle}>Nos diga qual é o seu jogo favorito</Text>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={() => HandleOnPress()}>
                    <Text style={styles.buttonText}>
                        COLETAR DADOS
                    </Text>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="chevron-right"
                            color="#fff"
                            size={25}
                            />
                        </Text>
                    </View>
                </RectButton>
            </View>
        </ScrollView>
    );
}

export default Home;