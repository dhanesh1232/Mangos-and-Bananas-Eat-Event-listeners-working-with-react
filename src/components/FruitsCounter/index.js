// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  onEatMango = () => {
    this.setState(prevState => ({key1: prevState.key1 + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({key2: prevState.key2 + 1}))
  }

  render() {
    const {key1, key2} = this.state
    return (
      <div className="mainContainer">
        <div className="fruitContainer">
          <h1>
            Bob ate <span>{key1}</span> mangoes <span>{key2}</span> bananas
          </h1>
          <div className="innerContainer">
            <div className="mango">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="imgUrl"
                alt="mango"
              />
              <button type="submit" className="btn" onClick={this.onEatMango}>
                Eat Mango
              </button>
            </div>
            <div className="banana">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="imgUrl"
              />
              <button type="submit" className="btn" onClick={this.onEatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
