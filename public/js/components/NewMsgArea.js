/**
 * Created by nana on 16/3/18.
 */
var React  = require('react');

module.exports = React.createClass({
  render : function(){
    return (
      <div className="newMsgArea">
        <input type="text" className="editIpt"/>
        <button className="sendBtn">Send</button>
      </div>
    );
  }
});