/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Header} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'
class App extends Component{
    componentWillMount(){
        var firebaseConfig = {
          apiKey: "",
          authDomain: "authentication-26b5e.firebaseapp.com",
          databaseURL: "https://project-id.firebaseio.com",
          projectId: "",
          storageBucket: "project-id.appspot.com",
          messagingSenderId: "sender-id",
          appID: ""
        };
        firebase.initializeApp(firebaseConfig);
    }
    render(){
        return (<View>
            <Header headerText="Authentication"/>
            <LoginForm/>
            </View>);
    }
}

export default App;
