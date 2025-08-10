import React, { useState } from 'react';
import { Button, Pressable, View, Text } from 'react-native';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import * as Clipboard from 'expo-clipboard'

import { styles } from './BatButtonStyles';
import generatePass from '../../services/passwordService';


export function BatButton() {


    const [passwordLength, setPasswordLength] = useState(20);
    const [pass,setPass] = useState('');

    function plusSize(){
        if (passwordLength<20){setPasswordLength(passwordLength + 1)}
    }

    function lessSize(){
        if (passwordLength>4)
            {setPasswordLength(passwordLength - 1)}
    }

    function handleGenerateButton(){
        let generateToken = generatePass(passwordLength)
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }

    return (
    <>
        <BatTextInput pass={pass}/>
        <View style={styles.length}>
            <Pressable style={styles.buttonSize} onPress={lessSize}>
                <Text style={styles.text}>{'\u25C0'}</Text>
            </Pressable>
            <View style={styles.buttonLength}>
                <Text style={styles.text}>SIZE: </Text>
                <Text style={styles.text}>{passwordLength}</Text>
            </View>
            <Pressable style={styles.buttonSize} onPress={plusSize}>
                <Text style={styles.text}>{'\u25B6'}</Text>
            </Pressable>
        </View>
        <Pressable style={styles.button} onPress={handleGenerateButton}>
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleCopyButton}>
            <Text style={styles.text}>⚡COPY</Text>
        </Pressable>
    </>
  );
}