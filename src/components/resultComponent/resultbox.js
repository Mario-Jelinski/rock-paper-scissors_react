import React, { Component } from 'react';

class Resultbox extends Component {
	constructor(props) {
		super(props);
		this.imgArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
		this.framecounter = 0;
	}

	state =  { img1: 'blank', img2: 'blank' };

	wait(ms) {
		return new Promise( resolve => setTimeout( resolve, ms ) );
	}
	async startAnimation() {

		if(!this.tick()) {
			return;
		}

		await this.wait(100);

		window.requestAnimationFrame(this.startAnimation.bind(this));
	}

	tick() {
		if(this.framecounter == 30) {
			this.framecounter = 0;
			return false;
		}

	  let number1 = Math.floor((Math.random() * 3));
    let number2 = Math.floor((Math.random() * 3));
		this.setState({img1: this.imgArray[number1]});
		this.setState({img2: this.imgArray[number2]});
		this.framecounter++;

		return true;
	}

	componentDidMount() {
		this.startAnimation();
	}

	componentWillUnmount() {

	}

  render() {
		let img1 = this.state.img1;
		let img2 = this.state.img2;
    return (
			<div className="row">
				<div className="col-md-12 text-center">
					<div className="result-box clearfix">
						<div id="result-box1">
							<img src={ require( './img/' + img1 + '.jpg') }/>
						</div>
						<div id="result-box2">
							<img src={ require( './img/' + img2 + '.jpg') }/>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default Resultbox;
