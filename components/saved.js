var React = require("react");


var Search = React.createClass({
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
    return (<div className="panel panel-default">
                <div className="panel-heading text-center"><h4>Saved Articles</h4></div>
                <div className="panel-body">
                    <div className="well">
                        <div className="row">
                            <div className="col-sm-8">
                                <p className="results"></p>
                            </div>
                            <div className="col-sm-4">
                                <form action="/api/saved" method="DELETE">
                                    <button>Saved</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
  }
});

module.exports = Search;