var React = require('react');
var WeatherDisplay = require('WeatherDisplay');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
        return {
          isLoading: false
        }
  },
  handleSearch: function(state){
    //this.setState(state);
    var that = this;

    this.setState({
      isLoading: true
    })

    function onSuccessLoading(){
      state.isLoading = false;
      that.setState(state);
    }

    function onFailLoading(){
      delete state.country;
      delete state.temperature;
      state.isLoading = false;
      that.setState(state);
    }

    openWeatherMap.getTemp(state.country).then(function(temp){
      state.temperature = temp;
      onSuccessLoading();
    }, function(errorMessage){
      onFailLoading();
      alert(errorMessage);

    });
  },
  render: function(){
    var {country, temperature, isLoading} = this.state;

    function renderMessage(){
      if(isLoading){
        return (
          <h3>Fetching Weather...</h3>
        );
      }else if(temperature && country){
        return (
          <WeatherDisplay country={country} temperature={temperature}/>
        );
      }
    }

    return (
      <div>
        <h3>Get Your Temperature</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        </div>
    );
  }
});

module.exports = Weather;
