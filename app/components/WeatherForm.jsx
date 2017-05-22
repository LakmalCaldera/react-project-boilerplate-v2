var React = require('react');

var Weather = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();

    var inputElem = this.refs.country;
    var inputVal = inputElem.value;

    if(inputVal.length > 0){
        inputElem.value="";
        this.props.onSearch({country: inputVal});
    }
  },
  render: function(){
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter your country" ref="country"/>
          <div>
            <button>Get Temperature</button>
          </div>
        </form>
    );
  }
});

module.exports = Weather;
