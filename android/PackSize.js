var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;
var pen = '\uD83D\uDD8B';
var containers = require('./packs.json');


var PackSize = React.createClass({
  getInitialState: function(){
    return { manual: false, active: '6'};
  },
  render: function(){
    var _this = this;
    var button= function(obj, index){
      return <TouchableHighlight style={[styles.selection, ((_this.state.active == index)? {backgroundColor: '#22cc22'} : {backgroundColor: '#4444ff'})]} onPress={_this.handleButtonClick.bind(_this, obj, index)} key={index+obj}><Text style={styles.selectionText}>{obj}</Text></TouchableHighlight>;
    };
    return (
      <View style={styles.packSize}>
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Pack Size</Text>
            <TouchableHighlight onPress={this.showManual}><Text style={styles.headerPenText}>{pen}</Text></TouchableHighlight>
          </View>
          <View style={styles.manualInputWrapper}>
            <TextInput style={this.state.manual&&styles.manualInputActive} value={this.props.packSize+''} onChange={this.handleChange}/>
          </View>
        </View>
        <View style={styles.selectContainer}>
          <View style={styles.selectPackSize}>
            {containers.map(button)}
          </View>
        </View>
      </View>
      );
  },
  handleChange: function(event){
    var newValue = event.nativeEvent.text;
    this.props.packSizeUpdate(newValue);
  },
  handleButtonClick: function(packSize, index){
    var newValue = packSize;
    var index = index;
    this.props.packSizeUpdate(newValue);
    this.setState({active: index});
  },
  showManual: function(){
    console.log(!this.state.manual);
    this.setState({manual: !this.state.manual});
  }
});

var styles = StyleSheet.create({
  packSize:{
    marginBottom: 20
  },
  headerWrapper: {
    alignItems: 'center'
  },
  header:{
    flexDirection: 'row',
    marginBottom: 10,
  },
  headerText: {
    color: '#fff'
  },
  headerPenText: {
    height: 20,
    fontSize: 10
  },
  manualInputActive: {
    height: 25,
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#fff',
    // textAlign: 'center',
    width: 60,
    marginBottom: 30,
    color: '#fff'
  },
  selectContainer: {
    flex: 1
  },
  selection: {
    flex: 1,
    height: 40,
    paddingTop: 10,
    borderRadius: 10,
    marginRight: 5
  },
  selectionText: {
    // textAlign: 'center',
    color: '#fff'
  },
  selectPackSize: {
    flexDirection: 'row',
  },

});
module.exports = PackSize
