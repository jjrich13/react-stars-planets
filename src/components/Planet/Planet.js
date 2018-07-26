import React, {Component} from 'react';


class Planet extends Component{    
    render(){
        return(
            <li>
                The planet {this.props.planet.name} is {this.props.planet.diameter} million km in diameter
            </li>
        )
    }
}

export default Planet;