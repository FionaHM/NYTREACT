var React = require("react");
var helper = require("../app/utils/helper.js");


var Search = React.createClass({

    removeArticleClick: function(result){
        helper.deleteArticle(result.id)
        // update state of parent
        helper.querySaved().then((response) => {
            // update state of parent
            this.props.handleSavedData(response);
        })

    },
    render: function() {
        var component = this;  // setting variable to capture 'this' for use below
        if (this.props.saved){
            var resultComponents = this.props.saved.map(function(result) {
            return (<div className="row results" key={result.id}>
                    <div className="col-md-4 text-center"><a href={result.weburl}>{result.headline}</a></div>
                    <div className="col-md-4">{result.snippet}</div>
                    <div className="col-md-2 text-center">{result.created_at}</div>
                    <div className="col-md-2 text-center">
                        <button onClick={() => component.removeArticleClick(result)} className="btn btn-default text-center btn-primary">Delete</button>
                    </div>
                </div>)
            });
            return (<div className="panel panel-default">
                    <div className="panel-heading text-center"><h4>Saved Articles</h4></div>
                    <div className="panel-body">
                        <div className="well">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row results">
                                        <div className="text-center col-md-4"><strong>Article</strong></div>
                                        <div className="text-center col-md-4"><strong>Extract</strong></div>
                                        <div className="text-center col-md-2"><strong>Saved Date</strong></div>
                                        <div className="text-center col-md-2"></div>
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
                </div>);
            }
        }
});

module.exports = Search;