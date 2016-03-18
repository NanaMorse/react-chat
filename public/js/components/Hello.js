/**
 * Created by nana on 16/3/11.
 */
var React  = require('react');

module.exports = React.createClass({
  render : function(){
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
});