import React, { Component } from 'react';

class Choice extends Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        //this.handleChange = this.handleChange.bind(this);
      }
    handleChange(e) {
        this.props.setchoice(e.target.value);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        <label>
                            <input type="radio" name="choice" value="rock" onChange={(e) => this.handleChange(e)} defaultChecked="checked"/>
                            <img src={ require( './img/rock_icon.jpg') }/>
                        </label>
                        <label>
                            <input type="radio" name="choice" value="paper" onChange={(e) => this.handleChange(e)}/>
                            <img src={ require( './img/paper_icon.jpg') }/>
                        </label>
                        <label>
                            <input type="radio" name="choice" value="scissors" onChange={(e) => this.handleChange(e)}/>
                            <img src={ require( './img/scissors_icon.jpg') }/>
                        </label>
                        {this.props.mode == 1 &&
                            <label>
                                <input type="radio" name="choice" value="lizard" onChange={(e) => this.handleChange(e)}/>
                                <img src={ require( './img/lizard_icon.jpg') }/>
                            </label>
                        }
                        {this.props.mode == 1 &&
                            <label>
                                <input type="radio" name="choice" value="spock" onChange={(e) => this.handleChange(e)}/>
                                <img src={ require( './img/spock_icon.jpg') }/>
                            </label>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Choice;