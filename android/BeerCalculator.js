var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;
var AlcoholLevel = require('./AlcoholLevel.js');
var ContainerSize = require('./ContainerSize.js');
var PackSize = require('./PackSize.js');
var Price = require('./Price.js');
var CalcResults = require('./CalcResults.js');

var SubmitButton = React.createClass({
  render: function(){
    return (
      <View style={styles.wrapper}>
        <View>
          <TouchableHighlight style={styles.submitButton} onPress={this.props.toggleShowResults}>
            <Text style={styles.submitText}>See Results</Text>
          </TouchableHighlight>
        </View>
      </View>
      )
  }
});
var BeerCalculator = React.createClass({
  getInitialState: function(){
    return {
      abv: '3.8',
      containerSize: '330',
      packSize: '12',
      price: '20',
      personCount: '1',
      showResults: false
    };
  },
  render: function(){
    return(
      <View>
        <AlcoholLevel
            abvUpdate={this.abvUpdate}
            abv={this.state.abv}/>
        <ContainerSize
            containerSizeUpdate={this.containerSizeUpdate}
            containerSize={this.state.containerSize}/>
        <PackSize
            packSizeUpdate={this.packSizeUpdate}
            packSize={this.state.packSize}/>
        <Price
            priceUpdate={this.priceUpdate}
            personCountUpdate={this.personCountUpdate}
            price={this.state.price}
            personCount={this.state.personCount}/>
        <SubmitButton
          showSubmitButton={!this.state.showResults}
          toggleShowResults={this.toggleShowResults}
          showResults={this.state.showResults}/>
        <CalcResults
            showResults={this.state.showResults}
            abv={this.state.abv}
            containerSize={this.state.containerSize}
            packSize={this.state.packSize}
            price={this.state.price}
            personCount={this.state.personCount}/>
      </View>
    )
  },
  abvUpdate: function(newValue){
    this.setState({abv: newValue});
  },
  packSizeUpdate: function(newValue){
    this.setState({packSize: newValue});
  },
  containerSizeUpdate: function(newValue){
    this.setState({containerSize: newValue});
  },
  priceUpdate: function(newValue){
    this.setState({price: newValue});
  },
  personCountUpdate: function(newValue){
    this.setState({personCount: newValue});
  },
  toggleShowResults: function(){
    this.setState({showResults: !this.state.showResults});
  }
});
var styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flex: 100
  },
  submitButton: {
    backgroundColor: '#4444ff',
    color: '#fff',
    padding: 10,
    borderRadius: 10
  },
  submitText: {
    color: '#fff',
  }
});
module.exports = BeerCalculator;
