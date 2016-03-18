/**
 * Created by nana on 16/3/18.
 */
var React  = require('react');
var eventEmitter = require('wolfy87-eventemitter');

module.exports = React.createClass({
  getInitialState: function() {
    return { newMsg : '' };
  },

  render : function(){
    return (
      <div className="newMsgArea">
        <form onSubmit={this.sendMsg}>
          <input type="text" className="editIpt" onChange={this.onChange} value={this.state.newMsg}/>
          <button className="sendBtn">送出</button>
        </form>
      </div>
    );
  },

  onChange : function(e){
    this.setState({ newMsg : e.target.value });
  },

  sendMsg : function(e){
    e.preventDefault();
    var newMsg = this.state.newMsg;
    if(!newMsg) return;

    eventEmitter.trigger('sendMsg', [this.state.newMsg, 'hasSend']);

    newMsg = '';
    this.setState({ newMsg : newMsg });
  }
});