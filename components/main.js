var React = require("react");
// var ReactDOM = require("react-dom");
var Search = require("./Search.js");



var Main = React.createClass({
  getInitialState: function() {
      return {
          url:"",
          headline: "",
          source: "",
          pubdate: "",
          abstract: ""
      }
    },
  render: function () {
    return (<div className="container">
        <div className="jumbotron">
            <div className="page-header">
            <h2 className="text-center">New York Times Article Scrubber</h2>
            <p className="text-center">Search for and save articles of interest!</p>
            <hr/>
            </div>
        </div>
        <div className="well">
            <div><Search/></div>
        </div>
    </div>);
  }
});

module.exports = Main;