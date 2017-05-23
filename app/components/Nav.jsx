var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert('Not yet wired up!');
  },
  render: function(){
      return (
        <div className="top-bar">
            <div className="top-bar-left">
              <ul className="dropdown menu">
                <li className="menu-text">Weather App</li>
                <li>
                  <IndexLink to="/" activeStyle={{fontWeight: 900}}>Get Weather</IndexLink>
                </li>
                <li>
                  <IndexLink to="/about" activeStyle={{fontWeight: 900}}>About</IndexLink>
              </li>
                <li>
                  <IndexLink to="/examples" activeStyle={{fontWeight: 900}}>Examples</IndexLink>
                </li>
              </ul>
            </div>
            <div className="top-bar-right">
              <form onSubmit={this.onSearch}>
                <ul className="menu">
                  <li>
                    <input type="search" placeholder="Search Weather"/>
                  </li>
                  <li>
                    <input type="submit" className="button" placeholder="Search Weather" value="Get Weather"/>
                  </li>
                </ul>
              </form>
            </div>
          </div>
      );
  }
});

module.exports = Nav;
