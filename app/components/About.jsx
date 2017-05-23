var React = require('react');
var {Link} = require('react-router');

var About = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="text-center">About The App</h1>
        <p>A weather application that fetch the Temperature of any given city. This app was developed to learn the React Library and Redux Pattern.</p>
        <p>You can follow the project on <a href="https://github.com/LakmalCaldera/ReactWeatherApp">GitHub</a></p>
        <p>This app is developed by: <strong>Lakmal Caldera</strong></p>
        <p>Some of the tools that were used to develop this app:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react/">React</a> - This was the Javascript framework that was used.
          </li>
          <li>
            <a href="https://openweathermap.org/">Open Weather Map</a> - This was the Javascript framework that was used.
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
