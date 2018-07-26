import React, {Component} from 'react';


class CurrentNewStar extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div>
                New Star is {this.props.currentStar.name} and has a diameter of {this.props.currentStar.diameter} kilometers
            </div>

        )
    }
}

export default CurrentNewStar ;