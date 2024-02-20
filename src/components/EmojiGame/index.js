/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {progress: true, topScore: 0, idTracker: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickPlayAgain = () => {
    this.setState({
      idTracker: [],
      progress: true,
    })
  }

  renderResult = () => {
    const {idTracker} = this.state
    const {emojisList} = this.props
    const result = idTracker.length === emojisList.length
    return (
      <WinOrLoseCard
        result={result}
        clickPlayAgain={this.clickPlayAgain}
        score={idTracker.length}
      />
    )
  }

  stopGameAndUpdateTopScore = score => {
    const {topScore} = this.state
    let p = topScore
    if (score > topScore) {
      p = score
    }
    this.setState({
      topScore: p,
      progress: false,
    })
  }

  emojiClick = id => {
    const {emojisList} = this.props
    const {idTracker} = this.state
    const isEmojiPresent = idTracker.includes(id)
    const clickedEmojiLength = idTracker.length

    if (isEmojiPresent) {
      this.stopGameAndUpdateTopScore(clickedEmojiLength)
    } else {
      if (clickedEmojiLength === emojisList.length - 1) {
        this.stopGameAndUpdateTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        idTracker: [...prevState.idTracker, id],
      }))
    }
  }

  renderEmojiList = () => {
    const ShuffledList = this.shuffledEmojisList()
    return (
      <ul className="list-container">
        {ShuffledList.map(each => (
          <EmojiCard
            key={each.id}
            emojiDetails={each}
            emojiClick={this.emojiClick}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {progress, topScore, idTracker} = this.state
    return (
      <div>
        <NavBar
          progress={progress}
          score={idTracker.length}
          topScore={topScore}
        />
        <div className="emojis-container">
          {progress ? this.renderEmojiList() : this.renderResult()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
