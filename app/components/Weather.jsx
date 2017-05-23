var React = require('react');
var WeatherDisplay = require('WeatherDisplay');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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

    function onFailLoading(e){
      delete state.country;
      delete state.temperature;
      state.isLoading = false;
      state.errorMessage = e;
      that.setState(state);
    }

    openWeatherMap.getTemp(state.country).then(function(temp){
      state.temperature = temp;
      onSuccessLoading();
    }, function(errorMessage){
      onFailLoading(errorMessage.message);
      //alert(errorMessage);

    });
  },
  render: function(){
    var {country, temperature, isLoading, errorMessage} = this.state;
    function renderMessage(){
      if(isLoading){
        return (
          <h3 className="text-center">Fetching Weather...</h3>
        );
      }else if(temperature && country && !errorMessage){
        return (
          <WeatherDisplay country={country} temperature={temperature}/>
        );
      }
    }

    function renderErrorMessage(){
      if(errorMessage){
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderErrorMessage()}
        </div>
    );
  }
});

module.exports = Weather;
