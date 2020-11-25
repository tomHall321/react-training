import React, { Component } from 'react';

class LameGame extends Component {

	constructor(props) {
		super(props);
		this.state = {
			startTime: 0,
			nowTime: 0,
		}

		this.handleStart = this.handleStart.bind(this);
		this.handleNow = this.handleNow.bind(this);
	}

	handleStart() {
		this.setState(
			{
			    startTime: Date.now(),
			}
		);
	}

	handleNow() {
        this.setState(
            {
                nowTime: Date.now(),
            }
        );

	}

	render() {
		let {aim} = this.props;
        let {startTime} = this.state;
        let {nowTime} = this.state;

		return (
			<div>
				{!startTime ? (<button onClick={this.handleStart}>Start</button>) : null}

                {startTime && !nowTime ? (<button onClick={this.handleNow}>Now</button>) : null}

            <p>
                {startTime && !nowTime ? 'Target is ' + aim + ' seconds.' : null}
            </p>
				{nowTime ? (<p>Result: {(aim - ((nowTime - startTime) / 1000)).toFixed(1)} seconds off</p>) : null} 
                {/* Date.now is milliseconds, so above is 10 - (1606306129709 -  1606306114545)  which is 15164 / 1000 = 15.164  */}
                {/* Aim minus the difference between the time start was clicked and the time now was clicked */}
				
			</div>
		);
	}
}

export default LameGame;