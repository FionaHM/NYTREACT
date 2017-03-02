var React = require("react");

var Results = React.createClass({
    getInitialState: function() {
        return {
            markup : "{{#each markup }} this.test {{/each markup }}"
   
        }
    },
    render: function() {
            var resultComponents = this.props.results.map(function(result) {
                return <div className="row results" key={result._id}>
                <div className="col-md-4"><a href={result.web_url}>{result.headline.main}</a></div>
                <div className="col-md-4">{result.snippet}</div>
                <div className="col-md-2">{result.pub_date}</div>
                <div className="col-md-2">
                    <form action="/api/saved" method="POST">
                            <button>Saved</button>
                    </form>
                </div>
                </div>
            });
            return <div>{resultComponents}</div>;
        }
});


module.exports = Results;