import React, {Component} from 'react';


class StarList extends Component{
    // constructor(props){
    //     super(props)

        
    // }
    render(){

        return(
            <form onSubmit={this.props.handleSubmit}>
                <input value={this.props.newStar.name} type="text" placeholder="name" onChange={this.props.handleChangeForInput('name')}/>
                <input value={this.props.newStar.diameter} type="number" placeholder="diameter" onChange={this.props.handleChangeForInput('diameter')} />
                <input type="submit" />
            </form>

        )
    }
}

export default StarList ;