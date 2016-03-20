/**
 * Created by Nana on 2016/3/20.
 */
var React  = require('react');
var eventEmitter = require('../managers/eventEmitter');

var MemberList = React.createClass({
  render : function(){
    var createList = function(item){
      return <li key={item.id}>{item.name}</li>;
    };

    return <ul>{this.props.members.map(createList)}</ul>;
  }
});

module.exports = React.createClass({

  getInitialState : function(){
    return { members : [] };
  },

  componentDidMount : function(){
    eventEmitter.on('loginSuccess', this.onLoginSuccess);
  },

  onLoginSuccess : function(name){
    this.state.members.unshift({
      name : name,
      id : Date.now()
    });
    this.setState({ members : this.state.members });
  },

  render : function() {
    return (
      <div className="memberListArea">
        <MemberList members={this.state.members} />
      </div>
    );
  }
});