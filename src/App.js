import React, { Component } from 'react';


//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';

import Resultbox from './components/resultComponent/resultbox';
import PlayerMode from './components/playermodeComponent/playermode';
import Controls from './components/controlsComponent/controls';
import ChoiceBox from './components/choiceComponent/choice';
//includes
import './Assets/css/default.min.css';

// prop types
//communication between siblings, ref child to parent
//observer pattern für event triggern von componenten
//https://medium.com/react-tutorials/react-state-14a6d4f736f5

class App extends Component {
  state = {result: null, playermode: null, choice: null, numChoices: 3, gamemode: 0, running: false};

  setPlayermode( mode ) {
    console.log(mode);
    this.setState({ playermode: mode });
  }
  setChoice ( ch ) {
    console.log(ch);
    this.setState({ choice: ch });
  }
  setGameMode () {
    this.setState({ gamemode: !this.state.gamemode });
  }
  setStart () {
    if(!this.state.running) {
      this.setState({ running: true });
    }
  }
  render() {
    return (
      <div className="App">
        <div className="game">
          <Header foo={this.state.playermode} />
          <Resultbox running = {this.state.running }/>
          <PlayerMode setmode = {this.setPlayermode.bind(this)} />
          <ChoiceBox setchoice = {this.setChoice.bind(this)} mode = {this.state.gamemode} />
          <Controls setmode = {this.setGameMode.bind(this)} start = {this.setStart.bind(this)} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

