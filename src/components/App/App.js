import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      starList: [
        {name: 'Nunki', diameter: 130},
        {name: 'Menkar', diameter: 114},
        {name: 'Polaris', diameter: 90}
      ],
      newStar: {
        name: '',
        diameter: ''
      }
    };
    
  }

  handleSubmit = (event) =>{
    console.log(this.state);
    event.preventDefault();
    //take the values on new star and add them to star list
    this.setState({
      starList: [...this.state.starList, this.state.newStar],
      newStar: {
        name: '',
        diameter: ''
      }
    })
    
}

handleNameChange = (event) => {
  // save what is in the inputs on newStar.name
  this.setState({
    newStar: {
      ...this.state.newStar,
      name: event.target.value
    }
  })
}

handleDiameterChange = (event) => {
  this.setState({
    newStar: {
      ...this.state.newStar,
      diameter: event.target.value
    }
  })
}
  render() {

    // let starListItemArray = []

    //DONT PUSH
    // for( let i = 0; i < this.state.starList.length; i++){
    //   starListItemArray.push(<li>{this.state.starList[i]}</li>)
    // }

    //STILL PUSHING
    // for(let star of this.state.starList){
    //   starListItemArray.push(<li>{star}</li>)
    // }

    //map still pushing
    // this.state.starList.map( (star)=>{
    //   starListItemArray.push(<li>{star}</li>)
    // })

    // best map usage
    let starListItemArray = this.state.starList.map( (star, index) => {
      return <li key={index}>The star {star.name} is {star.diameter} million km in diameter</li>
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.newStar.name} type="text" placeholder="name" onChange={this.handleNameChange}/>
        <input value={this.state.newStar.diameter} type="text" placeholder="diameter" onChange={this.handleDiameterChange} />
        <input type="submit" />
        </form>

        <ul className="App-intro">
          {starListItemArray}
        </ul>
      </div>
    );
  }
}

export default App;
