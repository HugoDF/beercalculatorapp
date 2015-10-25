var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;
var pen = '\uD83D\uDD8B';
var containers = require('./containers.json');


var ContainerSize = React.createClass({
  getInitialState: function(){
    return { manual: false, active: '0'};
  },
  render: function(){
    var _this = this;
    var button= function(obj, index){
      return <TouchableHighlight style={[styles.selection, ((_this.state.active == index)? {backgroundColor: '#22cc22'} : {backgroundColor: '#4444ff'})]} onPress={_this.handleButtonClick.bind(_this, obj, index)} key={index+obj.value}><Text style={styles.selectionText}>{obj.value + obj.unit}</Text></TouchableHighlight>;
    };
    return (
      <View style={styles.containerSize}>
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <View><Text style={styles.headerText}>Container Size</Text></View>
            <TouchableHighlight onPress={this.showManual}><Text style={styles.headerPenText}>{pen}</Text></TouchableHighlight>
          </View>
          <View style={styles.manualInputWrapper}>
            <TextInput style={this.state.manual&&styles.manualInputActive} value={this.props.containerSize+''} onChange={this.handleChange}/>
          </View>
        </View>
        <View style={styles.selectContainer}>
          <View style={styles.selectContainerSize}>
            {containers.map(button)}
          </View>
        </View>
      </View>
      );
  },
  handleChange: function(event){
    var newValue = event.nativeEvent.text;
    this.props.abvUpdate(newValue);
  },
  handleButtonClick: function(obj, index){
    var newValue = obj.mL_equiv;
    var index = index;
    this.props.containerSizeUpdate(newValue);
    this.setState({active: index});
  },
  showManual: function(){
    console.log(!this.state.manual);
    this.setState({manual: !this.state.manual});
  }
});

var styles = StyleSheet.create({
  containerSize: {
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
  manualInputWrapper: {
    alignItems: 'center'
  },
  manualInputActive: {
    flex: 1,
    height: 25,
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#fff',
    textAlign: 'center',
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
    textAlign: 'center',
    color: '#fff'
  },
  selectContainerSize: {
    flexDirection: 'row',
  },

});
module.exports = ContainerSize
