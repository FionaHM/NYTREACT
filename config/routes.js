var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory =  ReactRouter.hashHistory;
var IndexRoute = require("react-router").IndexRoute;
var Main = require("../components/Main");
var Search = require("../components/Search");
var Results = require("../components/Results");
var Saved = require("../components/Saved");


var routes = (
    <Router history={hashHistory}>
        <Route IndexRoute component={Main}>
            <Route path='/' component={Search}/>
            <Route path='/' component={Results} />
            <Route path='/' component={Saved}/>
        </Route>  
    </Router>
)

module.exports = routes;