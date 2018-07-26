import React, { Component } from 'react';

class PlayerMode extends Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        //this.handleChange = this.handleChange.bind(this);
      }
    handleChange(e) {
        this.props.setmode(e.target.value);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="game-mode-box">
                        <label>
                            <input type="radio" name="game-mode" value="p-vs-c" onChange={(e) => this.handleChange(e)} defaultChecked="checked"/>
                            <span className="btn btn-secondary">&nbsp;Player vs Computer</span>
                        </label>
                        <label>
                            <input type="radio" name="game-mode" value="c-vs-c" onChange={(e) => this.handleChange(e)}/>
                            <span className="btn btn-secondary">&nbsp;Computer vs Computer</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerMode;
