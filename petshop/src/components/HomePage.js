var React = require('react');
var ReactDOM = require('react-dom');

var HomePage = function(){

    //inline styling
    var style = {
        textAlign: 'center',
        fontSize: '3em',
        color: 'blue'
    };
    
    return(
        <h1 style={style}> 
        Welcome to petshop 
        </h1>
    );
};


module.exports = HomePage;

