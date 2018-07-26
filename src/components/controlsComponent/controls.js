import React, { Component } from 'react';

class Controls extends Component {
    handleGameStart(e) {
        //console.log(e.target.value);
        this.props.start();
    }

    handleSwitchMode(e) {
        console.log("switch mode");
        this.props.setmode();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <button className="btn btn-primary" id="game-start" onClick={(e) => this.handleGameStart(e)}>play</button>
                </div>
                <div className="col-md-12 text-center">
                    <button className="btn btn-secondary" id="switch-mode" onClick={(e) => this.handleSwitchMode(e)}>switch mode</button>
                </div>
            </div>
        );
    }
}

export default Controls;
