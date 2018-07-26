import React, {Component} from 'react';
import Star from '../Star/Star'


class StarList extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        let starListItemArray = this.props.starList.map( (star, index) => {
            return   (
            <Star starData={star} key={index}/>
            )
          });

        return(
            <ul className="App-intro">
                {starListItemArray}
            </ul>

        )
    }
}

export default StarList;