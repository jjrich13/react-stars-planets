import React, {Component} from 'react';
import Planet from '../Planet/Planet'


class PlanetList extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        let planetListItemArray = this.props.planetList.map( (planet, index) => {
            return   (
                
                <Planet key={index} planet={planet}/>
            )
          });

        return(
            <ul className="App-intro">
                {planetListItemArray}
            </ul>

        )
    }
}

export default PlanetList;