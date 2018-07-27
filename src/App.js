import React, { Component } from 'react';


//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';

import Resultbox from './components/resultComponent/resultbox';
import PlayerMode from './components/playermodeComponent/playermode';
import Controls from './components/controlsComponent/controls';
import ChoiceBox from './components/choiceComponent/choice';

import Solver from './classes/solver';
import Player from './classes/player';
import Computer from './classes/computer';
//includes
import './Assets/css/default.min.css';

// prop types
//communication between siblings, ref child to parent
//observer pattern für event triggern von componenten
//https://medium.com/react-tutorials/react-state-14a6d4f736f5

class App extends Component {
  state = {result: null, playermode: 'p-vs-c', choice: 'rock', numChoices: 3, gamemode: 0, running: false};

  constructor() {
    super();
    this.player = new Player;
    this.solver = new Solver;
    this.computer1 = new Computer;
    this.computer2 = new Computer;
  }

  setPlayermode( mode ) {
    console.log(mode);
    this.setState({ playermode: mode });
  }
  setChoice( ch ) {
    console.log(ch);
    this.setState({ choice: ch });
  }
  setGameMode() {
    this.setState({ gamemode: !this.state.gamemode });
  }
  setStart() {
    if(!this.state.running) {
      this.setState({ running: true });

      console.log('GAMEMODE:');
      console.log(this.state.gamemode);
      let maxChoices = 3;
      if(this.state.gamemode)
        maxChoices = 5;

      let choice1;
      if(this.state.playermode === 'p-vs-c' )
        choice1 = this.state.choice;
      else
        choice1 = this.computer1.calculateChoice(maxChoices);

      let choice2 = this.computer2.calculateChoice(maxChoices);

      let result = this.solver.compare(choice1, choice2);
      console.log(choice1);
      console.log(choice2);
      console.log(result);

      this.resultbox.startAnimation();
    }
  }
  setStop() {
    this.state.running = false;
  }
  render() {
    return (
      <div className="App">
        <div className="game">
          <Header foo={this.state.playermode} />
          <Resultbox running = {this.state.running } ref = {instance => { this.resultbox = instance; }} stop = {this.setStop.bind(this)} />
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

