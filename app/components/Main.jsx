var React = require('react');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          <div>
            <h1>This is a React Boilerplate app</h1>
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Foundation</li>
            </ul>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
