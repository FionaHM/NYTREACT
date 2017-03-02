var React = require("react");
var Results = require("./Results.js");
var Query = require("./Query.js");

var Search = React.createClass({
  render: function () {
    return ( <div>
             <Query />
             </div>);
  }
});

module.exports = Search;