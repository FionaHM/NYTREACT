var React = require("react");
var ReactDOM = require("react-dom");
var APIKey = require('../config/APIKEY.js');
var Results = require("./Results.js");
var helper = require("../app/utils/helper.js");
var Saved = require("./Saved.js");

var Search = React.createClass({
   
    getInitialState: function() {
        return {
            topic: "",
            startdate: "",
            enddate: "",
            results: []
        }
    },
    handleData: function(result){
        // sets state of results and resets input fields
        console.log(result)
        this.setState({
            topic: "",
            startdate: "",
            enddate: "",
            results: result
        });
    },
    updateTopic: function(e) {
        this.setState({
        topic: e.target.value
        })
    },
    updateStartDate: function(e) {
        this.setState({
        startdate: e.target.value
        })
    },
    updateEndDate: function(e) {
        this.setState({
        enddate: e.target.value
        })
    },
    // This function will respond to the user input
    handleClick: function() {
        // gets article data from express server
        var searchQuery = "/search/"+this.state.topic+"/"+this.state.startdate+"/"+this.state.enddate;
        // use ESX6 Syntax to maintain 'this' context
        helper.runQuery(searchQuery).then((response) => {
            this.handleData(response.docs)
        })
    },
    render: function () {
        return (<div>
                    <div className="panel panel-default">
                    <div className="panel-heading text-center"><h4>Search</h4></div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label htmlFor="topic">Topic</label>
                            <input type="text"  className="form-control" onChange={this.updateTopic} maxLength="70" id="topic" name="topic" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="start-date">Start Date (YYYYMMDD)</label>
                            <input type="text" value={this.state.startdate}  onChange={this.updateStartDate} maxLength="8" className="form-control" id="startdate" name="startyear" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="end-date">End Year (YYYYMMDD)</label>
                            <input type="text" value={this.state.enddate} onChange={this.updateEndDate} name="quantity" maxLength="8" className="form-control" id="enddate" name="endyear" />
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
                <div><Saved /></div>
            </div>);
    }
});

module.exports = Search;