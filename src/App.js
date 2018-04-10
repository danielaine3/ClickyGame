import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import DashCard from "./components/DashCard";
import Wrapper from "./components/Wrapper";
import pics from "./pics.json";

class App extends Component {
// const App = () => 
// <wrapper>

  

// </wrapper>

  //Setting this.state.pics to the pics json array
  state = {
    pics
  };

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
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;