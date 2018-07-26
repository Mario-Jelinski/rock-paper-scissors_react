/*global Player, module */
/* exported Player */

let Player = require('./player.js');

module.exports = class Computer extends Player {
    constructor() {
        super();
        this._names = ['Amiga', 'Atari', 'Z80'];
        this.choices = ["rock", "paper", "scissors", "lizard", "spock"];
    }

    createName() {
        let number = Math.floor((Math.random() * 3));
        this._name = this._names[number];
    }

    calculateChoice(length) {
        return this.choices[Math.floor((Math.random() * length))];
    }
}