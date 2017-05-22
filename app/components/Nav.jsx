var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
      return (
        <div>
          <h2>Nav Component</h2>
          <IndexLink to="/" activeStyle={{fontWeight: 900}}>Get Weather</IndexLink>
          <IndexLink to="/about" activeStyle={{fontWeight: 900}}>About</IndexLink>
          <IndexLink to="/examples" activeStyle={{fontWeight: 900}}>Examples</IndexLink>
        </div>
      );
  }
});

module.exports = Nav;
