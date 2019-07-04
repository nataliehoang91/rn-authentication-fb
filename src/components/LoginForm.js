import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Card, CardSection, Button, Input } from "./common";
class LoginForm extends Component {
  state = { text: "" };
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
            label="Email"
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
            />
          </CardSection>
          <CardSection />
          <CardSection>
            <Button>Login</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default LoginForm;
