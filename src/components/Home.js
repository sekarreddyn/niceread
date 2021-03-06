import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Replace screen</Text>
        <Text>Prop from dynamic method: {this.props.homeProp}</Text>
        <Button onPress={Actions.pop}>Back</Button>
      </View>
    );
  }
}

module.exports = Home;
