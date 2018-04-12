import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import DashCard from "./components/DashCard";
import pics from "./pics.json";

class App extends Component {


  //Setting this.state.pics to the pics json array
  state = {
  	score: 0, 
  	topScore:0, 
  	status: "Click an image to begin!", 
    pics: pics
  };

  markChecked = id => {
  	const imageClicked = this.state.pics.find(image => image.id === id);

  	if(imageClicked.clicked) {
  		let shuffleCards = this.shuffleCards(this.resetPics(this.state.pics));
  		this.setState({
  			score:0, 
  			message:"Incorrect!",
  			pics: shuffleCards
  		});
  	}else {
  		imageClicked.clicked = true;
  		let shuffleCards = this.shuffleCards(this.state.pics);
  		let currentScore = this.state.score +1;
  		let newTopScore = this.state.topScore;
  		if (currentScore > newTopScore)
  			newTopScore = currentScore;

  		if (currentScore === 12 &&  newTopScore === 12) {
  			this.setState({
  				score: 0,
  				topScore: 0,
  				message: "Winner!", 
  				pics: this.resetPics(this.state.pics)
  			});
  		}else {
  			this.setState({
  				score:currentScore, 
  				topScore: newTopScore,
  				message: "Correct Doll!", 
  				pics:shuffleCards
  			});
  		}
  	}
  }

  resetPics = pics => {
  	pics.forEach( pic => {
  		pic.clicked = false;
  	});
  	return pics;
  }


  shuffleCards = pics => {
  	for (let i =pics.length - 1; i > 0; i--) {
  		const j = Math.floor(Math.random()* (i + 1));
  		[pics[i], pics[j]] = [pics[j], pics[i]];
  	}
  	return pics
  }

  render() {
    return (

      <Wrapper>
        <Navbar /> 
        <Header />
        {this.state.pics.map(pics =>(
          <DashCard
            id={pics.id}
            key={pics.id}
            image={pics.image}
            onClick={this.markChecked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;