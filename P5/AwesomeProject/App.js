import { Component } from 'react';
import { StyleSheet, TextInput, Switch, View, Button, text } from 'react-native';

export default class App extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      switchValue: false, texto: '',
    };
  }


  onPressLearnMore() {
    console.warn('Presionaste el boton')
  }
  onChange = (value) => {
    console.warn(`El switch cambiara a: ${value}`);
    this.setState({switchValue:value});
  }
  onChangeText = (value) => {
    console.warn(`El texto cambiara a: ${value}`);
    this.setState({texto:value});
  }

  
  render() {
    return (
      <View style={styles.container}>

        <TextInput
          placeholder='Escribe algo...'
          onChangeText={(texto) => this.onChangeText(texto)}
          value={this.state.texto}
        />
        <Switch
          onValueChange = {() => this.onChange(!this.state.switchValue)}
          value = {this.state.switchValue}
          />
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});