// Write your code here.
import './index.css'

const winUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {score, result, clickPlayAgain} = props
  const heading = result ? 'You Won' : 'You Lose'
  const text = result ? 'Best Score' : 'Score'
  const imgUrl = result ? winUrl : loseUrl

  const onClickPlay = () => {
    clickPlayAgain()
  }

  return (
    <div className="result-container">
      <div>
        <h1>{heading}</h1>
        <p>{text}</p>
        <p>{score}/12</p>
        <button type="button" onClick={onClickPlay}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" />
    </div>
  )
}
export default WinOrLoseCard
