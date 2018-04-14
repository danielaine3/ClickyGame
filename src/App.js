import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Status from "./components/Status";
import Wrapper from "./components/Wrapper";
import DashCard from "./components/DashCard";
import Footer from "./components/Footer";
import pics from "./pics.json";

class App extends Component {
  //Setting this.state.pics to the pics json array
  state = {
  	score: 0, 
  	topScore: 0, 
  	status: "GO AHEAD DOLL, KLICK TO BEGIN!", 
    pics: pics
  }

  markChecked = id => {
  	const picClicked = this.state.pics.find(image => image.id === id);

  	if(picClicked.clicked) {
  		let shuffledPix = this.shuffleCards(this.resetPics(this.state.pics));
  		this.setState({
  			score:0, 
  			status:"INKORRECT, KAN'T YOU KEEP UP?",
  			pics: shuffledPix
  		});
  	}else {
  		picClicked.clicked = true;
  		let shuffledPix = this.shuffleCards(this.state.pics);
  		let currentScore = this.state.score +1;
  		let newTopScore = this.state.topScore;
  		if (currentScore > newTopScore)
  			newTopScore = currentScore;

  		if (currentScore === 12) {
  			this.setState({
  				score: 0,
  				topScore: 12,
  				status: "KONGRATS! YOU WON!", 
  				pics: this.resetPics(this.state.pics)
  			});
        
  		}else {
  			this.setState({
  				score:currentScore, 
  				topScore: newTopScore,
  				status: "KORRECT DOLL!", 
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
  	for (let i = picsArray.length - 1; i > 0; i--) {
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
        <Status status={this.state.status} score={this.state.score} topScore={this.state.topScore} /> 
        {this.state.pics.map(pics =>(
          <DashCard
            id={pics.id}
            key={pics.id}
            image={pics.image}
            onClick={this.markChecked} />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
