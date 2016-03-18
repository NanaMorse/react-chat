/**
 * Created by nana on 16/3/18.
 */
var React  = require('react');
var eventEmitter = require('wolfy87-eventemitter');
var socket = require('../managers/socket');


var MsgList = React.createClass({
  render : function(){
    var createList = function(item){
      return <p key={item.id} className={item.className}>{item.msg}</p>;
    };

    return <div>{this.props.flows.map(createList)}</div>;
  }
});


module.exports = React.createClass({
  getInitialState : function(){
    return { flows : [] };
  },

  componentDidMount : function(){
    eventEmitter.on('sendMsg', this.onNewMsg);
    socket.on('chat message', this.onNewMsg);
  },

  onNewMsg : function(msg, className){
    var nextFlows = this.state.flows.concat({
      msg : msg,
      className : className,
      id : Date.now()
    });
    (className === 'hasSend') && socket.emit('chat message', msg);
    this.setState({ flows : nextFlows });
  },

  render : function(){
    return (
      <div className="flowArea">
        <MsgList flows={this.state.flows}/>
      </div>
    );
  }
});