var React = require("react");

var Results = React.createClass({
    getInitialState: function() {
        return {
            markup : "{{#each markup }} this.test {{/each markup }}"
   
        }
    },
    render: function () {
        return (<div className="panel panel-default">
                    <div className="panel-heading text-center"><h4>Results</h4></div>
                    <div className="panel-body">
                        <div className="well">
                            <div className="row">
                                <div className="col-sm-8">
                                    <p className="results">{this.props.headline}</p>
                                </div>
                                <div className="col-sm-4">
                                    <form action="/api/saved" method="POST">
                                        <button>Saved</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
    }
});

module.exports = Results;