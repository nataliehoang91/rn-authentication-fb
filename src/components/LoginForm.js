import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Card, CardSection, Button, Input, Spinner} from "./common";
import firebase from "firebase";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  onButtonPress = () => {
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password).then(this.onLoginSuccess)
          .catch(this.onLoginFail)
      });
  };

  onLoginSuccess = () => {
    this.setState({ email: "", password: "", loading: false, error: "" });
  };
  onLoginFail = () => {
    this.setState({
      
      loading: false,
      error: "Authentication is failed"
    });
  };
  renderButton = () => {
    if (this.state.loading) {
      return <Spinner />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
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
            <Text style={styles.errorTextStyle}>{this.state.error}</Text>
          </CardSection>

          <CardSection>{this.renderButton()}</CardSection>
        </Card>
      </View>
    );
  }
}

const styles={
    errorTextStyle:{
        fontSize:20,
        
        color:'red'
    }
}
export default LoginForm;
