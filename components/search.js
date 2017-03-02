var React = require("react");
var ReactDOM = require("react-dom");
var APIKey = require('../config/APIKEY.js');
var Results = require("./Results.js");

var Search = React.createClass({
   
    getInitialState: function() {
        return {
            topic: "",
            startyear: 0,
            endyear: 0,
            results: []
        }
    },
    handleData: function(result){
        // sets state of results
        this.setState({results: result.docs})
    },
    handleClick: function() {
        var topic = $('#topic').val();
        var startdate = $('#start-date').val();
        var enddate = $('#end-date').val();
        var myHeaders = new Headers();
        var myInit = { method: 'GET' };
        // use ESX6 Syntax to maintain 'this' context
        // gets article data from express server
        fetch("/search/"+topic+"/"+startdate+"/"+enddate, myInit)   
        .then((response) => {
            return response.json()
        }).then((data) => {
            this.handleData(data);
        })
    },
    render: function () {
        return (<div>
                <div className="panel panel-default">
                    <div className="panel-heading text-center"><h4>Search</h4></div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label htmlFor="topic">Topic</label>
                            <input type="text" className="form-control" maxLength="70" id="topic" name="topic" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="start-date">Start Date (YYYYMMDD)</label>
                            <input type="number" name="quantity"  min="19000101"  max="20170228" className="form-control" id="start-date" name="startyear" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="end-date">End Year (YYYYMMDD)</label>
                            <input type="number" name="quantity" min="19000101" max="20170228"  className="form-control" id="end-date" name="endyear" />
                        </div>
                        <button onClick={this.handleClick} type="submit" className="btn btn-default">Search</button>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading text-center"><h4>Results</h4></div>
                    <div className="panel-body">
                        <div className="well">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="text-center col-md-4">Article</div>
                                        <div className="text-center col-md-4">Extract</div>
                                        <div className="text-center col-md-2">Published Date</div>
                                        <div className="text-center col-md-2">Save</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row results"><Results results={this.state.results}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }


});

module.exports = Search;