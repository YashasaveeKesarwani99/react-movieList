import React from "react";
import "./styles.css";
import firebase from "firebase";
import Search from "../Container/Search/search";
import { BrowserRouter, Route } from "react-router-dom";
import Authentication from "../Container/Authentication/authentication";


export default class App extends React.Component {
  
  componentDidMount(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCqafnYZyRuKxhTEsfg1gaSQ2N6p9pwS_U",
    authDomain: "auth-86847.firebaseapp.com",
    databaseURL: "https://auth-86847.firebaseio.com",
    projectId: "auth-86847",
    storageBucket: "auth-86847.appspot.com",
    messagingSenderId: "953040344962",
    appId: "1:953040344962:web:3d65807c1fee66dfbc219b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    
}
  render()
  {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact render={() => <Authentication />} />
        <Route path="/Search" render={() => <Search />} />
      </div>
    </BrowserRouter>
  );
  }
}
