// app/components/TextInputField.tsx
import React from 'react';
import { TextInput, StyleSheet} from 'react-native';
import { Text, View } from './Themed';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
};

/**
 * ラベル付きの入力フィールドコンポーネント
 */
export default function TextInputField({
  value,
  onChangeText,
  placeholder = '',
  label,
}: Props) {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8, 
  },
});
