import { View, TextInput, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MovieForm(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.Title}> Titre du film </Text>

            <TextInput style={[styles.textInput, [{ height: 40 }]]}
                value={props.title}
                onChangeText={props.handleTitleChange}
                placeholder="titre du film">
            </TextInput>

            <Text style={styles.Title}>Synopsis</Text>
            <TextInput style={[styles.textInput,
            [{ height: 120 }]]}
                placeholder="synopsis du film"
                value={props.synopsis}
                multiline
                onChangeText={props.handleSynopsisChange}>

            </TextInput>
            <Text style={styles.Title}>Le poster du film</Text>
            <TextInput style={[styles.textInput,
            [{ height: 40 }]]}
                placeholder="url de l'image du film"
                value={props.url}
                multiline
                onChangeText={props.handleUrlChange}>

            </TextInput>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 55,

    },
    textInput: {
        margin: 5,
        textAlign: 'center',
        borderWidth: 1,
        padding: 5,
        width: "90%"
    },

    Title: {
        textAlign: 'center',
        color: "black",
        padding: 5,
        fontSize: "20px",
        fontweight: 'bold',
        fontWeight: 'bold',

    },
});