/**
 * Created by nana on 16/3/18.
 */
var React  = require('react');
var eventEmitter = require('../managers/eventEmitter');

module.exports = React.createClass({

  getInitialState : function(){
    return {
      name : ''
    };
  },

  componentDidMount : function(){
    eventEmitter.on('loginSuccess');
  },


  render : function(){
    return (
      <div className="targetArea">
        <img className="avatar" src="img/avatar.jpg"/>
        <div className="profile">
          <span>Morse</span>
        </div>
      </div>
    );
  }
});