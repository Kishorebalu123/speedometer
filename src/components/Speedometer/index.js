import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onApplyBrake = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-card">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className=""
          alt="speedometer"
        />
        <h1 className="heading">Speed is {count}mph</h1>
        <p className="">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-card">
          <button type="button" onClick={this.onAccelerate} className="button1">
            Accelerate
          </button>
          <button type="button" onClick={this.onApplyBrake} className="button2">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
