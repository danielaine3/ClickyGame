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
  	topScore: 0, 
  	status: "Go ahead Doll, klick to begin!", 
    pics: pics,
    // clickedPics: []
  }

  // handleClick = id => {
  // 	if (this.state.clickedPics.includes(id)) {
  // 		console.log("GameOver")
  // 		this.setState({
  // 			clickedPics: [],
  // 			status: "Klick Klick! Already picked Okuuuur?!",
  // 			score: 0, 
  // 			topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore
  // 		})
  // 	} else if (this.state.score === 11) {
  // 		this.setState({
  // 			clickedPics: [],
  // 			status: "Way to keep up Doll! You won!",
  // 			score: this.state.score + 1, 
  // 			topScore: (this.state.score +1 > this.state.topScore) ? this.state.score +1 : this.state.topScore
  // 		})
  // 	} else {
  // 		this.setState({
  // 			clickedPics: [ ...this.state.clickedPics, id],
  // 			status: "Korrect!",
  // 			score: this.state.score +1
  // 		}, () => console.log(`Score: ${this.state.score} Top Score: ${this.state.topScore}`))
  // 	}
  // 	this.shuffleCards(pics)
  // };

  markChecked = id => {
  	const imageClicked = this.state.pics.find(image => image.id === id);

  	if(imageClicked.clicked) {
  		let shuffledPix = this.shuffleCards(this.resetPics(this.state.pics));
  		this.setState({
  			score:0, 
  			message:"Incorrect!",
  			pics: shuffledPix
  		});
  	}else {
  		imageClicked.clicked = true;
  		let shuffledPix = this.shuffleCards(this.state.pics);
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
  				pics:shuffledPix
  			});
  		}
  	}
  }

  resetPics = picsArray => {
  	picsArray.forEach( pic => {
  		pic.clicked = false;
  	});
  	return picsArray;
  }

  shuffleCards = picsArray => {
  	for (let i =picsArray.length - 1; i > 0; i--) {
  		const j = Math.floor(Math.random()* (i + 1));
  		[picsArray[i], picsArray[j]] = [picsArray[j], picsArray[i]];
  	}
  	return picsArray;
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
            onClick={this.markChecked} />
        ))}
      </Wrapper>
    );
  }
}

export default App;

