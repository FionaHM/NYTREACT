var React = require("react");

var Results = React.createClass({

    saveArticleClick: function(result){

        console.log("teset", result);
        var articleData = {
            id: result._id,
            weburl: result.web_url,
            headline: result.headline.main,
            snippet: result.snippet,
            pubdate: result.pub_date
        }
        $.post('/api/saved',articleData, function(data, success){
            console.log(success);
        })

    },
    render: function() {
        var component = this;  // setting variable to capture 'this' for use below
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
        return <div>{resultComponents}</div>;
    }
});

module.exports = Results;