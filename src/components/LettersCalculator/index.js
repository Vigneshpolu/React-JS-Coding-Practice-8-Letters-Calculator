// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onClickChange = event => {
    const {value} = event.target
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Calculate The Letters You enter</h1>
          <div className="input-container">
            <label htmlFor="text" className="label">
              Enter the phrase
            </label>
            <input
              type="text"
              onChange={this.onClickChange}
              id="text"
              className="input"
            />
          </div>
          <div className="length-container">
            <p>No.of letters: {searchInput.length}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
