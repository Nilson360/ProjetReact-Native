import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    // Placez ici vos identifiants Firebase (SDK)
    apiKey: "AIzaSyCGgBW8aaWvrngEs_Z_3aOU_lCCrHzquiM",
    authDomain: "my-movies-4df26.firebaseapp.com",
    projectId: "my-movies-4df26",
    storageBucket: "my-movies-4df26.appspot.com",
    messagingSenderId: "680149337662",
    appId: "1:680149337662:web:3b7a80a0d57c9fe65a336f"
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default class Fire {
    getMovies(callback) {
        const q = query(collection(db, 'movies'), orderBy('title', 'asc'));
        onSnapshot(q, (snapshot) => {
            let movies = [];
            snapshot.forEach(doc => {
                movies.push({ id: doc.id, ...doc.data() });
            });
            callback(movies);
        });
    }

    addMovie(movie) {
        addDoc(collection(db, 'movies'), movie);
    }

    updateMovie(movie) {
        updateDoc(doc(db, 'movies', movie.id), movie);
    }

    deleteMovie(movie) {
        deleteDoc(doc(db, 'movies', movie.id))
    }
}

