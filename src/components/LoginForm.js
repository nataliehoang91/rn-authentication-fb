import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Card, CardSection, Button, Input } from "./common";
class LoginForm extends Component {
  state = { email: "", password: "" };
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
            <Button>Login</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default LoginForm;
