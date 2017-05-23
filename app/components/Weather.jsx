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

    openWeatherMap.getTemp(state.country).then(function(temp){
      state.temperature = temp;
      state.isLoading = false;
      that.setState(state);
    }, function(errorMessage){
      delete state.country;
      delete state.temperature;
      state.isLoading = false;
      state.errorMessage = errorMessage.message;
      that.setState(state);
    });
  },
  componentDidMount: function(){
      var location = this.props.location.query.location;

      if(location && location.length > 0){
        this.handleSearch({country: location});
        window.location.hash = "#/";
      }
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;

    if(location && location.length > 0){
      this.handleSearch({country: location});
      window.location.hash = "#/";
    }
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
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderErrorMessage()}
        </div>
    );
  }
});

module.exports = Weather;
