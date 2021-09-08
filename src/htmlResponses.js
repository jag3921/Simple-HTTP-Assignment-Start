const textResponses = require('./textResponses.js');

function pageOne (){
    const p1 = textResponses.responseOne;
    return p1;
}

module.exports = {
    pageOne: pageOne
};