var React = require('react');
var ReactDOM = require('react-dom');

//display on UI
//home page component
//function that return jsx

var HomePage = function(){
    return(
        <h1> Welcome to petshop </h1>
    );
};

ReactDOM.render(
    <HomePage/>,
    document.getElementById('root')
);