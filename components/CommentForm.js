import { View, TextInput, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CommentForm(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.Title}> Auteur </Text>

            <TextInput style={[styles.textInput, [{ height: 40 }]]}
                value={props.author}
                onChangeText={props.handleAuthorChange}
                placeholder="author du commentaire">
            </TextInput>

            <Text style={styles.Title}>Commentaire</Text>
            <TextInput style={[styles.textInput,
            [{ height: 120 }]]}
                placeholder="author du commentaire"
                value={props.content}
                multiline
                onChangeText={props.handleContentChange}>
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