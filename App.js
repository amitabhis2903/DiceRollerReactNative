import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      uri: require('./src/images/dice1.png')
    }
  }

  getRandomNumber = () => {
    return Math.floor(Math.random()* 6) + 1
  }

  playBtnPressed = () => {
    //Alert.alert("Hello: "+ this.getRandomNumber())
    let rNumber = this.getRandomNumber()

    switch (rNumber) {
      case 1:
        this.setState({ uri: require('./src/images/dice1.png' )})
        break;
      case 2:
        this.setState({ uri: require('./src/images/dice2.png' )})
        break;
      case 3:
        this.setState({ uri: require('./src/images/dice3.png' )})
        break;
      case 4:
        this.setState({ uri: require('./src/images/dice4.png' )})
        break;
      case 5:
        this.setState({ uri: require('./src/images/dice5.png' )})
        break;
      case 6:
        this.setState({ uri: require('./src/images/dice6.png' )})
        break;
    
      default:
          this.setState({ uri: require('./src/images/dice1.png' )})
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
        source = {this.state.uri}
        />
        <TouchableOpacity onPress = {this.playBtnPressed}>
          <Text style = {styles.gameBtn}>
            Play Game
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb961',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameBtn: {
    marginTop: 35,
    fontSize: 20,
    color: 'black',
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: 'black'
  }
});
