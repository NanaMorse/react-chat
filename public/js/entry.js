/**
 * Created by nana on 16/3/11.
 */

require('../css/main.css');

var React  = require('react');
var ReactDom = require('react-dom');
var container = document.getElementById('container');

var TargetArea = require('./components/TargetArea');
var FlowArea = require('./components/FlowArea');
var NewMsgArea = require('./components/NewMsgArea');

var ChatApp = React.createClass({
  render : function(){
    return (
      <div className="chatMain">
        <TargetArea />
        <FlowArea />
        <NewMsgArea />
      </div>
    );
  }
});

ReactDom.render(<ChatApp />, container);