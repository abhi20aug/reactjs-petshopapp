var React = require('react');

//define class
class DogComponent extends React.Component{
    //define render
    render(){
    var style = {
        height: 600,
        width: 600
    }   ; 

    //return
    return(
        <div>
        <h3> Dog Component </h3>
        <img style={style} src="http://greatinspire.com/wp-content/uploads/2012/11/Cute-puppy-photos-602.jpg" alt="Cute Dog"/>
        </div>
    );
};
};

module.exports = DogComponent;