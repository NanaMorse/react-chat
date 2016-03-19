/**
 * Created by nana on 16/3/18.
 */
var React  = require('react');
var eventEmitter = require('../managers/eventEmitter');
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
    socket.on('receiveMsg', this.onNewMsg);
  },

  onNewMsg : function(msg, className){
    var nextFlows = this.state.flows.concat({
      msg : msg,
      className : className,
      id : Date.now()
    });
    (className === 'hasSend') && socket.emit('sendMsg', msg);
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