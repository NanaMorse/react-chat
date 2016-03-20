/**
 * Created by nana on 16/3/11.
 */

require('../css/main.css');

var React  = require('react');
var ReactDom = require('react-dom');
var container = document.getElementById('container');
var eventEmitter = require('./managers/eventEmitter');

var TargetArea = require('./components/TargetArea');
var FlowArea = require('./components/FlowArea');
var NewMsgArea = require('./components/NewMsgArea');
var LoginArea = require('./components/LoginArea');
var MemberListArea = require('./components/MemberListArea');

var ChatApp = React.createClass({
  getInitialState : function(){
    return {
      displayLogin : 'block',
      displayMain : 'none'
    };
  },

  componentDidMount : function(){
    var self = this;
    eventEmitter.on('tryLogin', function(name){
      self.setState({
        displayLogin : 'none',
        displayMain : 'block'
      });
      eventEmitter.trigger('loginSuccess', [name]);
    });
  },

  render : function(){
    return (
      <div className="chatApp">
        <div className='chatLogin' style={{display :  this.state.displayLogin}}>
          <LoginArea />
        </div>
        <div className='chatMain' style={{display :  this.state.displayMain}}>
          <FlowArea />
          <NewMsgArea />
        </div>
        <MemberListArea />
      </div>
    );
  }
});

ReactDom.render(<ChatApp />, container);