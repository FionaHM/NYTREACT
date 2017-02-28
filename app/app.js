// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

var Main = React.createClass({
  render: function () {
    return (
    <div className="container">
        <div className="jumbotron">
            <div className="page-header">
            <h2 className="text-center">New York Times Article Scrubber</h2>
            <hr/>
            </div>
        </div>
        <div class="well">
            <div className="panel panel-default">
                <div className="panel-heading text-center"><h4>Search</h4></div>
                <div className="panel-body">
                    <form action="/search" method="GET">
                    <div className="form-group">
                        <label for="topic">Topic</label>
                        <input type="text" className="form-control" maxlength="70" id="topic" name="topic" required />
                    </div>
                    <div className="form-group">
                        <label for="start-year">Start Date (YYYYMMDD)</label>
                        <input type="date" name="quantity"  min="19000101"  max="20170228" className="form-control" id="start-year" name="startyear" />
                    </div>
                    <div className="form-group">
                        <label for="end-year">End Year (YYYYMMDD)</label>
                        <input type="date" name="quantity" min="19000101" max="20170228"  className="form-control" id="end-year" name="endyear" />
                    </div>
                    <button type="submit" name="search" class="btn btn-default">Search</button>
                    </form>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading text-center"><h4>Results</h4></div>
                <div className="panel-body">
                    <div className="well">
                        <div className="row">
                            <div className="col-sm-8">
                                <p className="results"></p>
                            </div>
                            <div className="col-sm-4">
                                <form action="/api/saved" method="POST">
                                    <button>Saved</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading text-center"><h4>Saved Articles</h4></div>
                <div className="panel-body">
                    <div className="well">
                        <div className="row">
                            <div className="col-sm-8">
                                <p className="results"></p>
                            </div>
                            <div className="col-sm-4">
                                <form method="POST" action="/api/saved?_method=DELETE">
                                    <button>Remove</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
  }
});


ReactDOM.render(<Main />, document.getElementById("app"));
