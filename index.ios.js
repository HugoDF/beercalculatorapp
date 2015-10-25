/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  NavigatorIOS
} = React;
var BeerCalculator = require('./ios/BeerCalculator.js');

var Beercalcapp = React.createClass({
  render: function(){
    return(
      <View style={styles.wrapper}>
        <Text style={styles.appTitle}>Beer Calculator</Text>
        <BeerCalculator/>
      </View>
    );
  }
});
var beercalculatorapp = React.createClass({
  render: function() {
    return (
      <Beercalcapp/>
    );
  }
});

var styles = StyleSheet.create({
  appTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
  },
  wrapper: {
    backgroundColor: '#333',
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10
  }
});

AppRegistry.registerComponent('beercalculatorapp', () => beercalculatorapp);
