import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Card, CardSection, Button, Input } from "./common";
import firebase from "firebase";

class LoginForm extends Component {
  state = { email: "", password: "", error: "" };

  onButtonPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({
              error: "Authentication is failed"
            });
          });
      });
  };

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              placeholder="user@mail.com"
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              placeholder="password"
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.onPress}>Login</Button>
          </CardSection>
          <CardSection>
            <Text style={styles.errorTextStyle}>{this.state.error}</Text>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center'
    }
}
export default LoginForm;
