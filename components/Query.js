var React = require("react");
// var ReactDOM = require("react-dom");

var Query = React.createClass({
  render: function () {
    return (<div className="panel panel-default">
                    <div className="panel-heading text-center"><h4>Search</h4></div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label htmlFor="topic">Topic</label>
                            <input type="text"  value={this.state.topic}  className="form-control" maxLength="70" id="topic" name="topic" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="start-date">Start Date (YYYYMMDD)</label>
                            <input type="number" value={this.state.startyear}  min="19000101"  max="20170228" className="form-control" id="start-date" name="startyear" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="end-date">End Year (YYYYMMDD)</label>
                            <input type="number" value={this.state.enddate} name="quantity" min="19000101" max="20170228"  className="form-control" id="end-date" name="endyear" />

                        </div>
                        <button onClick={this.props.handleClick} type="submit" className="btn btn-default">Search</button>
                    </div>
                </div>);
  }
});

module.exports = Query;