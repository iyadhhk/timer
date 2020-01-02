import React from "react";
import "./Timer.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      start: false
    };

    setInterval(() => {
      if (this.state.start) {
        const time = this.state.timer;
        const second = time % 60;
        const min = Math.floor(time / 60);
        const hour = Math.floor(time / 3600);
        this.setState({
          timer: this.state.timer + 1,
          seconds: second,
          minutes: min,
          hours: hour
        });
      }
    }, 1000);
  }
  startTimer = () => {
    if (this.state.start === false) {
      this.setState({ start: true });
    } else {
      this.setState({ start: false });
    }
  };

  resetTimer = () => {
    this.setState({ start: false });
    this.setState({ timer: 0, seconds: 0, minutes: 0, hours: 0 });
  };

  render() {
    return (
      <div className="timer">
        <div className="time">
          <div>
            <h1>{String(this.state.hours).padStart(2, "0") + ":"}</h1>
            <p>Hours</p>
          </div>
          <div>
            <h1>{String(this.state.minutes).padStart(2, "0") + ":"}</h1>
            <p>Minutes</p>
          </div>
          <div>
            <h1>{String(this.state.seconds).padStart(2, "0")}</h1>
            <p>Seconds</p>
          </div>
        </div>
        <div className="buttons">
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;
