var React = require("react");
var ReactDOM = require("react-dom");
var APIKey = require('../config/APIKEY.js');
var Results = require("./Results.js")

var Query = React.createClass({
   
    getInitialState: function() {
        // console.log(this);
        return {
            topic: "",
            startyear: 0,
            endyear: 0,
            weburl:"",
            headline: "",
            source: "",
            pubdate: "",
            abstract: "",
            snippet: ""
        }
    },
    handleData: function(result){
        console.log(result.docs[0].headline.main);
        this.setState({ headline : result.docs['0'].headline.main,
        snippet : result.docs['0'].snippet,
        weburl : result.docs['0'].web_url,
        source: result.docs['0'].source,
        pubdate : result.docs['0'].pub_date});
    },
   handleClick: function() {
        var topic = $('#topic').val();
        var startdate = $('#start-date').val();
        var enddate = $('#end-date').val();
        
        // $.get("/search/topic/startdate/enddate",function(result){
        //     this.handleData(result);
        // }).bind(this)
        var myHeaders = new Headers();
        var myInit = { method: 'GET' };
        fetch("/search/"+topic+"/"+startdate+"/"+enddate, myInit)   
        .then((response) => {
            return response.json()
        }).then((data) => {
            console.log("data", data);
            this.handleData(data);
        })

    
    },


    render: function () {
        return (<div className="panel panel-default">
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
                    <div><Results headline={this.state.headline}  weburl={this.state.weburl} snippet={this.state.snippet} pubdate={this.state.pubdate} source={this.state.source}/></div>
                </div>);
    }


});

module.exports = Query;