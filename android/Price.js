var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput
} = React;

var Price = React.createClass({
    render: function(){
    return (
      <View>
        <View style={styles.price}>
          <Text style={styles.priceHeader}>Price (£)</Text>
          <View style={styles.selectContainer}>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.manualInputWrapper}>
              <TextInput style={styles.manualInputActive} value={this.props.price+''} onChange={this.handleChange}/>
            </View>
          </View>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceHeader}>Number of Guests</Text>
          <View style={styles.selectContainer}>

          </View>
          <View style={styles.wrapper}>
            <View style={styles.manualInputWrapper}>
              <TextInput style={styles.manualInputActive} value={this.props.personCount+''} onChange={this.handlePersonCountChange}/>
            </View>
          </View>
        </View>
      </View>
      )
  },
  handleChange: function(event){
    var newValue = (parseFloat(event.nativeEvent.text) > '0' ) ? parseFloat(event.nativeEvent.text) : '0';
    this.props.priceUpdate(newValue);
  },
  handleSliderChange: function(value){
    this.props.priceUpdate(value);
  },
  handlePersonSliderChange: function(value){
    this.props.personCountUpdate(parseInt(value));
  },
  handlePersonCountChange: function(event){
    var newValue = parseInt(event.nativeEvent.text);
    this.props.personCountUpdate(newValue);
  }
});

var styles = StyleSheet.create({
  price: {
    marginBottom: 20
  },
  priceHeader: {
    // textAlign: 'center',
    color: '#fff',
    marginBottom:10
  },
  selectContainer: {},
  wrapper: {
    alignItems: 'center'
  },
  manualInputActive:{
    height: 20,
    fontSize: 14,
    color: '#fff',
    // textAlign: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    width: 80,
  },
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    // textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});
module.exports = Price;
