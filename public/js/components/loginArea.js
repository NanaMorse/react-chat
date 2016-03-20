/**
 * Created by Nana on 2016/3/20.
 */
var React  = require('react');
var eventEmitter = require('../managers/eventEmitter');
var socket = require('../managers/socket');

module.exports = React.createClass({

  getInitialState : function(){
    return {
      name : ''
    };
  },

  render : function(){
    return (
      <div className="loginArea">
        <form onSubmit={this.onLogin}>
          <input type="text" onChange={this.onInputName} value={this.state.name}/>
          <button>Enter</button>
        </form>
      </div>
    );
  },

  onLogin : function(e){
    e.preventDefault();
    var name = this.state.name;
    if (!name) return false;

    eventEmitter.trigger('tryLogin', [name]);

    name = '';
    this.setState({ name : name });
  },

  onInputName : function(e){
    this.setState({ name : e.target.value });
  }
});