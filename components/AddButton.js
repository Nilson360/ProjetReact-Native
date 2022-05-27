import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'

export default function AddButton(props) {

  return (
    <View>

      <TouchableOpacity
        onPress={props.handlePress}
        style={styles.container}
      >

        <Text style={styles.text}>{props.content}</Text>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#1E90FF',
    borderRadius: "100%",
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: 'rgba(30,144,255, 0.9)'

  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: 'center',
    color: "white",
  }
});

