import React from 'react'

// import the different screens
import * as firebase from "firebase";

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB5EwGC0L7DtR3XUwc-wG0H5HtMlFEJUcc",
    authDomain: "authsystem-8b2ce.firebaseapp.com",
    projectId: "authsystem-8b2ce",
    storageBucket: "authsystem-8b2ce.appspot.com",
    messagingSenderId: "552425315169",
    appId: "1:552425315169:web:f01f1aba33198e2e344320",
    measurementId: "G-GYHXHKE3WN"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  //Imports for the fonts 
  import * as Font from 'expo-font';
  import  AppLoading from 'expo-app-loading';
  
  import MyStack from './routes/routes.js';
  
  const customFonts = {
    'normal-font': require('./fonts/Helvetica-Normal.ttf'),
    'light-font': require('./fonts/Helvetica-Light.ttf'),
    'bold-font': require('./fonts/Helvetica-Bold.ttf')
  };
  
  export default class App extends React.Component{
  
    constructor(){
  
      super();
  
      this.state = {
        fontsLoaded: false
      }
    }
  
    async _loadFontsAsync(){
      await Font.loadAsync(customFonts);
      this.setState({fontsLoaded:true})
    }
  
    async componentDidMount(){
      this._loadFontsAsync();
    }
  
    render(){
        if(this.state.fontsLoaded){
            return(
              <MyStack />
            )
        }else{
            return <AppLoading/>
        }  
    }
  
  }