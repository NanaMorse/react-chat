/**
 * Created by nana on 16/3/18.
 */
var React  = require('react');

module.exports = React.createClass({
  render : function(){
    return (
      <div className="targetArea">
        <img className="avatar" src="img/avatar.jpg"/>
        <div className="profile">
          <span>Morse</span>
          <br/>
          <span>Age 18</span>
        </div>
      </div>
    );
  }
});