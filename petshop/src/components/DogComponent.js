var React = require('react');

//define class
class DogComponent extends React.Component{
    //define render
    render(){
    var style = {
        height: 300,
        width: 300
    }   ; 

    //return
    return(
        <div style={compStyle}>
        <h3> Dog Component </h3>
        <img style={style} src="http://greatinspire.com/wp-content/uploads/2012/11/Cute-puppy-photos-602.jpg" alt="Cute Dog"/>
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
module.exports = DogComponent;