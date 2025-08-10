import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps{
  pass: string
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput 
      style={styles.inputer}
      placeholder = 'PASS'
      value={props.pass}
      secureTextEntry={false}
    />
  );
}