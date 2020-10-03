import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import Header from '../../components/Header';
import PlatformCard from './PlatformCard';

import { GamePlatform } from './types';

import styles, { pickerSelectedStyles } from './styles';

const placeholder = {
    label: 'Selecione o Game',
    value: null,
}

const CreateRecord = () => {

    const [platform, setPlatform] = useState<GamePlatform>();
    const [selectedGame, setSelectedGame] = useState<string>('');

    const handleChangePlatform = (selectedPlatform: GamePlatform): void => {
        setPlatform(selectedPlatform);
    }

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
                    items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ]}
                    style={pickerSelectedStyles}
                />
            </View>
        </>
    );
}

export default CreateRecord;