import { StyleSheet, Button, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import TextInputField from '@/components/TextInputField';
import { Text, View } from '@/components/Themed';
import { sendText } from '@/services/api';

export default function TabOneScreen() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const handleSend = async () => {
    if (!name.trim()) {
      Alert.alert('エラー', 'テキストを入力してください');
      return;
    }
    setLoading(true);
    try {
      const data = await sendText(name);
      setResponse(data.output_payload);
      Alert.alert('送信成功', data.received);
    } catch (err: any) {
      console.error(err);
      setResponse(null);
      Alert.alert('送信失敗', err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <TextInputField
        value={name}
        onChangeText={setName}
        placeholder="Type something..."
        label="Input Field"
      />
      <Text style={{ marginTop: 8 }}>state: {name}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    
      {loading ? (
        <ActivityIndicator style={{ margin: 16 }} />
      ) : (
        <Button title="送信" onPress={handleSend} />
      )}

      {response !== null && (
        <Text style={styles.responseText}>{response}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
