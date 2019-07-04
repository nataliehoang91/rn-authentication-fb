/* eslint-disable prettier/prettier */

import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header,Button,Spinner,CardSection } from "./components/common";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";
class App extends Component {
  state = { loggedIn: false };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAGoSz5It1CybHCZoQvTigL_HKJi2G6uIU",
      authDomain: "authentication-26b5e.firebaseapp.com",
      databaseURL: "https://project-id.firebaseio.com",
      projectId: "authentication-26b5e",
      storageBucket: "project-id.appspot.com",
      messagingSenderId: "sender-id",
      appID: "505434430163"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true: return (
                   <CardSection>
                     <Button
                       onPress={() =>
                         firebase.auth().signOut()
                       }
                     >
                       Log Out
                     </Button>
                   </CardSection>
                 );
    
     case false: return <LoginForm />;

     default: return <Spinner/>
  };
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
