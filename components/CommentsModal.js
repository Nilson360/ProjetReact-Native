import { Modal, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { useState } from "react";
import React from 'react'
import CommentForm from './CommentForm'
import Fire from '../Fire';

export default function CommentsModal(props) {
  const [author, setAuthor] = useState(props.movie? props.movie.author : "")
  const [content, setContent] = useState(props.movie ? props.movie.content : "")

  function handlesubmit() {
    const firebase = new Fire();
    let movieComments= props.movie
    let movie={
      "author": author,
      "content": content,
      "published": new Date(),
      
    }

  if(props.movie){
    movie.id = props.movie.id
    movie.author = props.movie.author
    firebase.updateMovie(movieComments)
  } else{
    firebase.AddCocomments(movieComments)
  }
  props.handleclose()
  return (
    <View style={styles.modal}>
      <Modal visible={props.isCommentsModalVisible}>
        <View style={styles.container1}>

          <CommentForm author={author} content={content}
            handleAuthorChange={(newAuthor) => setAuthor(newAuthor)}
            handleContentChange={newContent=> setContent(newContent)}
           >
          </CommentForm>

          <View style={styles.container}>

            <TouchableOpacity style={styles.btn1} onPress={() => handlesubmit()}>
              <Text style={styles.text1}> Publier</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </View>
  )
  }
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
    textAlign: "center",
    color: "white",
  }

});


