import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor(props) {
  super(props)

  this.state = {
    comics: [],
    comicDataArray: []
  }
  
  this.handleClick = this.handleClick.bind(this);
}

componentDidMount() {
  fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=d37664cb4168a066ea0cbd02d0cad93b'
)
.then(response => response.json()) 
.then((json) => {

  this.setState({
    comics : json.data.results  
  })

  console.log(json.data.results)
})
}

handleClick() { 
  let comic = this.props
    let comicItems = this.state.comics.map((mappedComic) =>{
      return (
        <img key={mappedComic.id} src={mappedComic.thumbnail.path + "/portrait_large.jpg"}></img>
      )
    })

    this.setState({comicItems: comicItems})
}

  render() {

    

    return (
      <div className= 'button_container'>
        <h1>Comic App</h1>

        <button className='button' onClick= {this.handleClick}>Click me a lot</button>
        <div>{this.state.comicItems}</div>
        <p></p>
      </div>
    );
  }
}

export default App;
