var React = require('react');

//scrore as state so we need class component

class CatComponent extends React.Component{
 render(){
     var style= {
        height: 300,
        width: 300
     };
 return (
    <div style={compStyle}>
        <h3> Cat Component </h3>
        <img style= {style} src="https://i.ytimg.com/vi/vqc8oezvs8I/maxresdefault.jpg" alt="Cute Cat"/> 
            <div>
                <button> Like </button>     
                <button> Dislike </button>     
            </div>
    </div>
 );  
 };
      
};

var compStyle= {
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto'
};


module.exports = CatComponent;