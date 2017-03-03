var React = require("react");


var Search = React.createClass({
    getInitialState: function() {
        return {
            results: [],
            savedCount: 0
        }
    },
    handleData: function(result){
        // sets state of results
        this.setState({results: result})
    },
    
    componentDidMount: function(){
        var myHeaders = new Headers();
        var myInit = { method: 'GET' };
        // use ESX6 Syntax to maintain 'this' context
        // gets article data from express server
        fetch("/api/saved", myInit)   
        .then((response) => {
            return response.json()
        }).then((data) => {
            this.handleData(data);
        })

    },

    removeArticleClick: function(result){
        $.ajax({
            url: '/api/saved/'+result.id,
            type: 'DELETE',
            success: function(result) {
                // Do something with the result
            }
        });

    },
    render: function() {
        var component = this;  // setting variable to capture 'this' for use below
        console.log(this.state.results);
        if (this.state.results){
            console.log(this.state.results);
            var resultComponents = this.state.results.map(function(result) {

                return (<div className="row results" key={result.id}>
                    <div className="col-md-4 text-center"><a href={result.weburl}>{result.headline}</a></div>
                    <div className="col-md-4">{result.snippet}</div>
                    <div className="col-md-2 text-center">{result.created_at}</div>
                    <div className="col-md-2 text-center">
                        <button onClick={() => component.removeArticleClick(result)} className="text-center">Delete</button>
                    </div>
                </div>)
            });
            return (<div className="panel panel-default">
                    <div className="panel-heading text-center"><h4>Saved Articles</h4></div>
                    <div className="panel-body">
                        <div className="well">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="text-center col-md-4">Article</div>
                                        <div className="text-center col-md-4">Extract</div>
                                        <div className="text-center col-md-2">Saved Date</div>
                                        <div className="text-center col-md-2">Delete</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div>{resultComponents}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
            }
        }
});

module.exports = Search;