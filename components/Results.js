var React = require("react");
var helper = require("../app/utils/helper.js");


var Results = React.createClass({
    
    // componentDidMount: function(){
    //      this.setState({ savedCount: this.props.savedcount})
    // },
    saveArticleClick: function(result){;
        var articleObj = {
            id: result._id,
            weburl: result.web_url,
            headline: result.headline.main,
            snippet: result.snippet,
            pubdate: result.pub_date
        };
        
        var saved= helper.postArticle(articleObj) 

        // // this.setState({savedcount: this.state.savedcount + 1});
        // // update parent state by one
        // this.props.updateSavedCount();
    },
    render: function() {
        
        var component = this;  // setting variable to ensure 'this' context is for the component 
        var resultComponents = this.props.results.map(function(result) {

            return <div className="row results" key={result._id}>
                <div className="col-md-4 text-center"><a href={result.web_url}>{result.headline.main}</a></div>
                <div className="col-md-4">{result.snippet}</div>
                <div className="col-md-2 text-center">{result.pub_date}</div>
                <div className="col-md-2 text-center">
                    <button onClick={() => component.saveArticleClick(result)} className="text-center">Saved</button>
                </div>
            </div>
        });
        return (<div className="panel panel-default">
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
                                    <div className="row results"><div>{resultComponents}</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) }
});

module.exports = Results;