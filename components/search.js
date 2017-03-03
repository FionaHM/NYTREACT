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
            results: [],
            saved: []
        }
    },
    handleData: function(result){
        // sets state of results and resets input fields
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
    handleSavedData: function(result){
        this.setState({
            saved: result,
        })
    },
    componentDidMount: function(){
        console.log("going in here??");
        // get data for passing to then component on load
        helper.querySaved().then((response) => {
            this.handleSavedData(response)
        })    
    },
    // requery when parent component updates
    componentDidUpdate: function(){ 
        // creates infinite loop unless there is a break clause 
        // console.log("running did update")
        helper.querySaved().then((response) => {
            // console.log(this.state.savedcount, response.length)
            this.handleSavedData(response)
       
        })

    },
    render: function () {
        console.log(this.state.saved);
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
                    <div className="row results"><Results results={this.state.results}/></div>
                    <div className="row results"><Saved saved={this.state.saved}/></div>
                </div>);
    }
});

module.exports = Search;