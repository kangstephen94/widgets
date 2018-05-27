import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    const date = new Date();
    this.state = {
      time: date.toTimeString(),
      date: date.toDateString()
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount () {
    setInterval(this.tick, 1000);
  }

  render () {
    return (
      <div className="clock">
      <h1>{this.state.time}</h1>
      <h1>{this.state.date}</h1>
    </div>
    );
  }

  tick() {
    const date = new Date();
    this.setState({time: date.toTimeString(), date: date.toDateString()});
  }

}

export default Clock;
