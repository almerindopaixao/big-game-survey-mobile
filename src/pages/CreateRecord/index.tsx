import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import Header from '../../components/Header';
import PlatformCard from './PlatformCard';

import Axios from '../../services/Axios';
import { URL_GAMES } from '../../config/urls';

import { GamePlatform, Game } from './types';

import styles from './styles';

const placeholder = {
    label: 'Selecione o Game',
    value: null,
}

const mapSelectValue = (games: Game[]) => {
    return games.map((game) => ({
        ...game,
        label: game.title,
        value: game.id,
    }));
}

const CreateRecord = () => {

    const [platform, setPlatform] = useState<GamePlatform>();
    const [selectedGame, setSelectedGame] = useState<string>('');
    const [allGames, setAllGames] = useState<Game[]>([]);
    const [filteredGames, setFilteredGames] = useState<Game[]>([]);
    

    const handleChangePlatform = (selectedPlatform: GamePlatform): void => {
        setPlatform(selectedPlatform);

        const gamesByPlatform = allGames.filter((game) => game.platform === selectedPlatform)

        setFilteredGames(gamesByPlatform);
    }

    useEffect(() => {
        Axios.get(URL_GAMES)
            .then((response) => {
                const selectValue = mapSelectValue(response.data);
                console.log(selectValue);
                setAllGames(selectValue);
            })
            .catch((e) => Alert.alert(`Erro Inesperado ${e}`));
    }, []);

    return (
        <>  
            <Header />
            <View style={styles.container}>
                <TextInput 
                    placeholder="Nome" 
                    style={styles.inputText} 
                    placeholderTextColor="#9e9e9e"
                />
                <TextInput 
                    keyboardType="numeric"
                    placeholder="Idade" 
                    style={styles.inputText} 
                    placeholderTextColor="#9e9e9e"
                    maxLength={3}
                />
                <View style={styles.platformContainer}>
                    <PlatformCard 
                        platform="PC" 
                        icon="laptop" 
                        onChange={handleChangePlatform} 
                        activePlatform={platform}
                    />
                    <PlatformCard 
                        platform="XBOX" 
                        icon="xbox" 
                        onChange={handleChangePlatform} 
                        activePlatform={platform}
                    />
                    <PlatformCard 
                        platform="PLAYSTATION" 
                        icon="playstation" 
                        onChange={handleChangePlatform} 
                        activePlatform={platform}
                    />
                </View>
                <RNPickerSelect 
                    placeholder={placeholder}
                    onValueChange={(value) => setSelectedGame(value)}
                    value={selectedGame}
                    items={filteredGames}
                    style={{
                        inputAndroid: {
                            height: 50,
                            fontSize: 16,
                            paddingVertical: 12,
                            paddingHorizontal: 20,
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            color: '#ED7947',
                            paddingRight: 30,
                            fontFamily: "Play_700Bold",
                        },
                        inputIOS: {
                            fontSize: 16,
                            paddingVertical: 12,
                            paddingHorizontal: 20,
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            color: '#ED7947',
                            paddingRight: 30,
                            fontFamily: "Play_700Bold",
                            height: 50
                        },
                        placeholder: {
                            color: '#9E9E9E',
                            fontSize: 16,
                            fontFamily: "Play_700Bold",
                        },
                        iconContainer: {
                            top: 10,
                            right: 12,
                        }
                    }}
                    Icon={() => <Icon name="chevron-down" color="#9e9e9e" size={25} />}
                />
            </View>
        </>
    );
}


export default CreateRecord;