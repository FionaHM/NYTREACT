var React = require("react");
var helper = require("../app/utils/helper.js");


var Results = React.createClass({
    getInitialState: function() {
      return {
          savedCount: 0
      }
    },
    saveArticleClick: function(result){;
        var articleObj = {
            id: result._id,
            weburl: result.web_url,
            headline: result.headline.main,
            snippet: result.snippet,
            pubdate: result.pub_date
        };
        
        var saved= helper.postArticle(articleObj) 

        this.setState({savedCount: this.state.savedCount + 1})
     

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
        return (<div><div>{resultComponents}</div></div>);
    }
});

module.exports = Results;