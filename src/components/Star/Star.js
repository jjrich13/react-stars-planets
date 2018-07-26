import React, {Component} from 'react';



class Star extends Component{
    constructor(props){
        super(props);

        this.state = {
            isVisible : true,

        }
    }

    handleClick = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    render(){
        console.log(this.state.isVisible);
        
        let listItem;
        if (this.state.isVisible){
            //return li
            listItem = (
            <li>
                The star {this.props.starData.name} is {this.props.starData.diameter} million km in diameter
            </li>
            )
        } else {
            //return empty li
            listItem = <li></li>;
        }

        return(
            <div>
                {listItem}
                <button onClick={this.handleClick}>Show/hide</button>
            </div>

        )
    }
}

export default Star;