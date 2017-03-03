var axios = require("axios");

// Helper Functions 
var helpers = {

    runQuery: function(queryURL) {

        return axios.get(queryURL).then(function(response) {

        return response.data;
        })
    },

    querySaved: function(count) {

        return axios.get('/api/saved').then(function(response) {

            return response.data;
        })
    },
    postArticle: function(articleObj) {
        // axios is not posting req.body content so will use jquery here for now cos it works- must be something to do with middleware but will revisit if times
    //    return axios({ method: 'post',
    //         url: '/api/saved',
    //         data: articleObj,
    //         headers: {
    //         'Content-Type': 'application/json'
    //         }
    //     }).then(function (response) {
    //                 console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })        
        $.post('/api/saved',articleObj, function(data, success){
                if (success) {
                    console.log(success);
                    return success
                };
        })
    
    }
};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
