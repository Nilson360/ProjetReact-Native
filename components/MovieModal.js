import { Modal, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { useState } from "react";
import React from 'react'
import MovieForm from './MovieForm'
import Fire from '../Fire';


export default function MovieModal(props) {
  function handlesubmit() {
    const firebase = new Fire();
    let movie = {
      "title": title,
      "synopsis": synopsis,
      "url": url,
      "comments": []
    }
    if (props.movie) {
      movie.id = props.movie.id;
      movie.comments = props.movie.comments,
        firebase.updateMovie(movie);
    } else {
      firebase.addMovie(movie);
    }

    props.handleClose();
  }
  const [title, setTitle] = useState(props.movie ? props.movie.title : "");
  const [synopsis, setSynopsis] = useState(props.movie ? props.movie.synopsis : "");
  const [url, setUrl] = useState(props.movie ? props.movie.url : "");
  return (
    <View style={styles.modal}>
      <Modal visible={props.isVisible}>
        <View style={styles.container1}>

          <MovieForm title={title} synopsis={synopsis}
            handleTitleChange={newTitle => setTitle(newTitle)}
            handleSynopsisChange={newSynopsis => setSynopsis(newSynopsis)}
            handleUrlChange={newUrl => setUrl(newUrl)}>
          </MovieForm>

          <View style={styles.container}>

            <TouchableOpacity style={styles.btn1} onPress={() => handlesubmit()}>
              <Text style={styles.text1}> Valider</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
          <TouchableOpacity style={styles.btn1} onPress={props.handleClose}>
              <Text style={styles.text1}> Fermer</Text>
            </TouchableOpacity>
          </View>
             
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  modal: {
    backgroundColor: "rgba(236, 236, 236, 0.5)",
  },
  container: {
    alignItems: 'center',
    textAlign: 'center',
  },
  container1: {
    marginVertical: 120,
    backgroundColor: "rgba(236, 236, 236 0.5)",

  },
  container2: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: "rgba(236, 236, 236 0.5)",

  },

  btn1: {
    backgroundColor: "dodgerblue",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "dodgerblue",
    width: "50%",
    color: "white",

  },
  text1: {
    marginVertical: 1,
    textAlign: "center",
    color: "white",
  }

});


