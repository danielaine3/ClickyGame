import React, { Component } from 'react';
import './App.css';
import Counter from "./components/Counter";
import Score from "./components/Score";
import DashCard from "./components/DashCard";
import Wrapper from "./components/Wrapper";
import pics from "./pics.json";

class App extends Component {
// const App = () => 
// <wrapper>

//   <Counter /> 
//   <Score />

// </wrapper>

  //Setting this.state.pics to the pics json array
  state = {
    pics
  };

  render() {
    return (
      <Wrapper>
        {this.state.pics.map(pics =>(
          <DashCard
            id={pics.id}
            key={pics.id}
            image={pics.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;