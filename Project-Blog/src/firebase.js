import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


    let firebaseConfig = {
        apiKey: "AIzaSyCkJeIAxo280Rv38GYG6JNdloAc0rwR44A",
        authDomain: "reactapp-2d834.firebaseapp.com",
        databaseURL: "https://reactapp-2d834.firebaseio.com",
        projectId: "reactapp-2d834",
        storageBucket: "reactapp-2d834.appspot.com",
        messagingSenderId: "260440957367",
        appId: "1:260440957367:web:0d28d16c60b51e9e25c832",
        measurementId: "G-MZS97Z7PJR"
      };


class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);

        //referenciando a  DB para acessar em outros locais 
        this.app = this.database;
    };

    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password);
    }

    logout(){
        app.auth().signOut();
    }

    async register(nome, email, password){
        await app.auth().createUserWithEmailAndPassword(email, password)

        const uid = app.auth().correntUser.uid;

        return app.database().ref('usuarios').child(uid).set({ 
            nome: nome
        })
    }

    isInitialized(){
        return new Promise(resolve =>{
            app.auth().onAuthStateChanged(resolve);
        })
    }

    getCurrent(){
        return app.auth().currentUser && app.auth().currentUser.email
    }

    async getUserName(callback){
        if(!app.auth().currentUser){
            return null;
        }
         
        const uid = app.auth().currentUser.uid;

        await app.database().ref('usuarios').child(uid)
        .once('value').then(callback);
    }
}

export default new Firebase();
