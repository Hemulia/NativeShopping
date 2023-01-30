import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const addItem = () => {
    setShoppingList([...shoppingList, { key: item }]);
    setItem('');
  };

  const clearList = () => {
    setShoppingList([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add item"
        style={{ padding: 10, fontSize: 18 }}
        onChangeText={(text) => setItem(text)}
        value={item}
      />
      <Button title="Add" onPress={addItem} />
      <Button title="Clear" onPress={clearList} />
      <Text style={{marginTop:30}}>ShoppingList</Text>
      <FlatList
        data={shoppingList}
        renderItem={({ item }) => <Text style={{ padding: 10, fontSize: 18 }}>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:100
  },
});