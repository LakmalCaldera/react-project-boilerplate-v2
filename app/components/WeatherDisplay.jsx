var React = require('react');

var WeatherDisplay = React.createClass({
  render: function(){
    return (
        <h3>The weather in {this.props.country} is {this.props.temperature}&deg;</h3>
    );
  }
});

module.exports = WeatherDisplay;
