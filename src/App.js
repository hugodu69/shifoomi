import React, { Component } from 'react';
import './App.css';

class App extends Component {
	
	state = {
		player: {tool: "", score: 0},
		computer: {tool: "", score: 0},
		finalWinner: ""
	}

  render() {

		var playerHand = this.state.player.tool;
		var computHand = this.state.computer.tool;
		var playerScore = this.state.player.score;
		var computScore = this.state.computer.score;

		const play = e => {
			if(this.state.finalWinner!==""){
				this.setState({finalWinner:
				this.state.finalWinner + " (la partie est finie !)"
				});
			}
			else {
				var joueur = e.currentTarget.textContent;
				var ordi = Math.floor(Math.random() * 3 + 1);
				ordi=(ordi===1?'pierre' : ordi===2?'feuille' : 'ciseaux');

				const whoWin =
					(joueur===ordi)? '':
					(joueur==='pierre' &&  ordi==='ciseaux')? 'player' :
					(joueur==='feuille' && ordi==='pierre')? 'player' :
					(joueur==='ciseaux' && ordi==='feuille')? 'player' :
					'computer';

				const newPlayerScore = whoWin==='player'?playerScore+1 : playerScore;
				const newComputScore = whoWin==='computer'?computScore+1 : computScore;

				this.setState({player: {
					tool: joueur,
					score: newPlayerScore}});
				this.setState({computer: {
					tool: ordi,
					score: newComputScore}});
					
				if (newPlayerScore===5||newComputScore===5) {
					this.setState({finalWinner: 
					(playerScore>computScore?'you win !':'you loose...')});
				}
			}

		}


		const reset = () => {
			this.setState({player: {tool: "", score: 0}});
			this.setState({computer: {tool: "", score: 0}});
			this.setState({finalWinner: ""});
		}
	
	  return (
	  	<div>
				<button onClick={play}>pierre</button>
				<button onClick={play}>feuille</button>
				<button onClick={play}>ciseaux</button>
				<p>({playerScore}/5) joueur : {playerHand}</p>
				<p>({computScore}/5) ordi : {computHand}</p>
				<p>winner : {this.state.finalWinner}</p>
				<button onClick={reset}>reset</button>
	    </div>
	  );
  }
}

export default App;
