import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Header from '../../components/Header';

const CreateRecord = () => {
    return (
        <>  
            <Header />
            <Text style={styles.text}>Hello Records</Text>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
      color: '#fff',
      fontSize: 50,
      marginTop: 100,
      textAlign: 'center',
    },
  });

export default CreateRecord;