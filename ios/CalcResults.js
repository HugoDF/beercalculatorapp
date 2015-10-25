var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} = React;
var IndividualStats = React.createClass({
  render: function(){
    return (
      <View>
        <Text style={styles.resultText}>Number of units: {this.props.unitCount.toFixed(1)} ({(this.props.unitCount/3).toFixed(0)} times the driving limit)</Text>
        <Text style={styles.resultText}>£{this.props.pricePerLitre.toFixed(2)}/L</Text>
        <Text style={styles.resultText}>£{this.props.pricePerLitreOfAlcohol.toFixed(2)}/L of Alcohol</Text>
        <Text style={styles.resultText}>Price per {this.props.containerSize}mL Container: £{this.props.pricePerCan.toFixed(2)}</Text>
      </View>
      )
  }
});
var PerPersonStats = React.createClass({
  render: function(){
    var pricePerPerson = this.props.price/ this.props.personCount;
    var containersPerPerson = this.props.packSize/this.props.personCount;
    var alcoholPerPerson = this.props.alcoholVolume / this.props.personCount;
    var unitsPerPerson = this.props.unitCount/this.props.personCount;
    return(
      <View>
        <Text style={styles.resultText}>{unitsPerPerson.toFixed(1)} units per person ({(unitsPerPerson/3).toFixed(1)} times the driving limit)</Text>
        <Text style={styles.resultText}>£{pricePerPerson.toFixed(2)}/person</Text>
        <Text style={styles.resultText}>{this.props.containerSize}mL containers per person: {containersPerPerson.toFixed(0)}</Text>
        <Text style={styles.resultText}>Alcohol content per Person: {alcoholPerPerson.toFixed(0)}mL</Text>
      </View>
      )
  }
});
var CalcResults = React.createClass({
  render: function(){
    var isOnePerson = (parseInt(this.props.personCount) <= 1);

    // unit: L
    var totalVolume = (this.props.containerSize * this.props.packSize)/1000;
    // unit: mL
    var alcoholVolume = totalVolume * (this.props.abv/100) * 1000;

    // 1 unit = 10 mL of alcohol
    var totalUnits = alcoholVolume / 10;


    var pricePerLitre = (this.props.price > 0)? this.props.price/ totalVolume : 0;
    var pricePerLitreOfAlcohol = pricePerLitre / (this.props.abv/100);
    var pricePerCan = (this.props.price > 0 )? this.props.packSize / this.props.price : 0;
    var resultsStyle = (this.props.showResults)? {display: 'block'}: {display: 'none'};
    return (
      <View>
        {!this.props.showResults? <Text style={styles.hidden}>''</Text>:
        <View>
          <Text style={[styles.resultText, styles.resultTitle]}>Summary</Text>
          <Text style={styles.resultText}>Total alcohol volume: {alcoholVolume.toFixed(0)}mL</Text>
          <View>
          {
            !isOnePerson?<Text style={styles.hidden}>''</Text>:<IndividualStats
                              alcoholVolume={alcoholVolume}
                              unitCount={totalUnits}
                              pricePerLitre={pricePerLitre}
                              pricePerLitreOfAlcohol={pricePerLitreOfAlcohol}
                              pricePerCan={pricePerCan}
                              containerSize={this.props.containerSize}/>

          }
          {
            isOnePerson?<Text style={styles.hidden}>''</Text>:<PerPersonStats
                            price={this.props.price}
                            personCount={this.props.personCount}
                            packSize={this.props.packSize}
                            alcoholVolume={alcoholVolume}
                            unitCount={totalUnits}unitCount={totalUnits}
                            containerSize={this.props.containerSize}/>
          }
        </View>
      </View>}
      </View>
    )
  }
});
var styles = StyleSheet.create({
  resultText: {
    color: '#fff',
    // textAlign: 'center',
    marginBottom: 5
  },
  resultTitle: {
    fontSize: 20,
    marginBottom: 40,
    marginTop: 30,
  },
  hidden: {
    height: 0
  }
});
module.exports = CalcResults;
