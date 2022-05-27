import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView, View, TouchableHighlight, ActivityIndicator } from 'react-native';
import AddButton from './components/AddButton';
import MovieModal from './components/MovieModal';
import Fire from './Fire';
import { Card, Title, Paragraph } from 'react-native-paper';
import moment from 'moment';
import 'moment/locale/fr';
import CommentsModal from './components/CommentsModal';


export default function App() {
  const myDate = moment().format('llll');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateMovie, setUpdateMovie] = useState(null);
  const [comment, setComment] = useState(null);
  useEffect(() => {
    const firebase = new Fire();
    firebase.getMovies(movies => {
      setMovies(movies);
      setLoading(false);
    })
  }, [])

  function removeMovie(movie) {
    const firebase = new Fire();
    firebase.deleteMovie(movie)
  }

  return (

    <View style={styles.container}>
      <Text style={[styles.red]}> Bienvenue sur my <Text style={{ color: "#1E90FF" }}>Movies</Text>
      </Text>
      {loading && (<ActivityIndicator size={"large"} />)}
      <StatusBar style="auto" />

      {/* Affichage des films à l'écran principal */}
      <Text style={[styles.Time]}>
        Nous sommes le {myDate}
      </Text>
      <ScrollView>
        {movies.map(movie => (
          <View style={[styles.card]} key={movie.id}>
            <Card style={[styles.card]}>
              <Card.Content>
                <Title style={[styles.MovieTitle]}>{movie.title}</Title>
                <Paragraph style={[styles.filmDesc]}>{movie.synopsis}</Paragraph>
                
              </Card.Content>
              <Card.Cover resizeMode="contain" source={{ uri: movie.url }} style={[styles.Photo]} />
              <Card.Actions style={[styles.condition]}>

                <View style={[styles.Btn]}>
                  <TouchableHighlight onPress={() => removeMovie(movie)} styles={styles.btn1}>
                    <Text style={[styles.textTouch]}> Supprimer</Text>
                  </TouchableHighlight>
                </View>
                <View style={[styles.Btn]}>
                  <TouchableHighlight onPress={() => { setUpdateMovie(movie); setIsModalVisible(true) }} styles={styles.Btn}>
                    <Text style={[styles.textTouch]}> Modifier</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.Btn}>
                <TouchableHighlight > 
                    <Text style={[styles.textTouch]}> Commenter</Text>
                  </TouchableHighlight>
                </View>
              </Card.Actions>
            </Card>
          </View>
        ))}

        {isModalVisible && (<MovieModal isVisible={isModalVisible} handleClose={() => { setIsModalVisible(false) }} movie={updateMovie}>  </MovieModal>
        )}

      </ScrollView>
      <View style={styles.fixed}>
        <AddButton content="+" handlePress={() => { setIsModalVisible(true); setUpdateMovie(null) }}></AddButton>
      </View>
 
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 55,
    marginHorizontal: 5,
    flex: 1,
    backgroundColor: '#fff',
  },
  fixed: {
    position: "absolute",
    bottom: 20,
    right: 12,
  },
  Time: {
    fontSize: 10,
    marginHorizontal: 10,

  },
  red: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },

  filmDesc: {
    textAlign: 'justify',
    color: 'black',
  },

  MovieTitle: {
    fontWeight: 'bold',
    textAlign: 'justify',
    color: 'black',

  },
  Btn: {
    padding: 0.5,
    backgroundColor: "dodgerblue",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#fff',

  },
  comma: {
    alignItems: 'center',
    paddingVertical: 10,
  },
 comment: {
    padding: 0.5,
    backgroundColor: "dodgerblue",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#fff',

  },
  textTouch: {
    textAlign: 'center',
    color: "white",
    fontSize: 20,
    padding: 5,
  },
  com:{
    flex: 1,
      backgroundColor: "dodgerblue",
      color: "white",
      textAlign: "center",
      alignItems: "center",
      height: 20,
      width: 600,
  },

  card: {
    borderRadius: 1,
    borderWidth: 0.5,
    margin: 5,
    borderWidth: 1,
    borderColor: '#071e22n',
  },
  condition: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },


});
