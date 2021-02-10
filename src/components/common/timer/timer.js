import React, { Component } from "react";
import "./timer.css";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.countDownId = null;
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: false,
    };
  }

  componentDidMount() {
    this.countDownId = setInterval(this.timerInit, 1000);
  }

  componentWillUnmount() {
    if (this.countDownId) {
      clearInterval(this.countDownId);
    }
  }

  timerInit = () => {
    const { startDate } = this.props;
    // console.log(startDate);
    const now = new Date().getTime();
    if (!startDate) {
      this.setState({ expired: true });
      return;
    }
    const countDownStartDate = new Date(startDate).getTime();
    const distance = countDownStartDate - now;
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // For countdown is finished
    if (distance < 0) {
      clearInterval(this.countDownId);
      this.setState({
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true,
      });
      return;
    }
    this.setState({ hours, minutes, seconds, expired: false });
  };

  render() {
    const { hours, minutes, seconds, expired } = this.state;
    if (expired) {
      return <div className="expired">Expired :(</div>;
    }
    return (
      <div id='timerContainer'>
        <span id='amazing'>شگفت انگیز های روز</span>
        <div id="timer">
          <span className='time'>{seconds}</span>
          <span className='colon'>:</span>
          <span className='time'>{minutes}</span>
          <span className='colon'>:</span>
          <span className='time'>{hours}</span>
        </div>
      </div>
    );
  }
}
export default Timer;
