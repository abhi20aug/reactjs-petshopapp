var React = require('react');
var ReactDOM = require('react-dom');
var CatComponent = require('./CatComponent');
var DogComponent = require('./DogComponent');

var HomePage = function(){

    //inline styling
    var style = {
        textAlign: 'center',
        fontSize: '2em',
        color: 'blue'
    };
    
    return(
        <div>
            <h1 style={style}> 
            Welcome to petshop
            </h1>
            <div style={{marginTop:60, textAlign='center'}}>
                <CatComponent/>
                <DogComponent/>
            </div>
        </div>
    );
};


module.exports = HomePage;

