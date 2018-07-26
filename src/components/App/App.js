import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CurrentNewStar from '../CurrentNewStar/CurrentNewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';
import axios from 'axios';
import PlanetList from '../PlanetList/PlanetList'


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
      },
      planetList: []
    };
    
  }

  //will be called once, basically when page loads
  componentDidMount(){
    console.log('Component mounted');
    //this is a good place to make an initial get request
    this.getPlanets();
  }

  getPlanets(){
    axios.get('https://swapi.co/api/planets/?format=json')
      .then( response => {
        this.setState({
          planetList: response.data.results
        })
        console.log(this.state);
        
        
      
    })
  }

  handleFormSubmit = (event) =>{
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

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value
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
    // let starListItemArray = this.state.starList.map( (star, index) => {
    //   return <li key={index}>The star {star.name} is {star.diameter} million km in diameter</li>
    // });

    return (
      <div className="App">
        <Header />
        <CurrentNewStar currentStar={this.state.newStar}/>
        <NewStarForm 
          handleChangeForInput={this.handleChangeFor} 
          handleSubmit={this.handleFormSubmit} 
          starList={this.state.starList} 
          newStar={this.state.newStar}
        />

        
        <StarList starList={this.state.starList}/>
        <PlanetList planetList={this.state.planetList} />
        
        <Footer />
      </div>
    );
  }
}

export default App;
