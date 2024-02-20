import './index.css'

const NavBar = props => {
  const {score, topScore, progress} = props
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo"
          alt="emoji logo"
        />
        <h1 className="text">Emoji Game</h1>
      </div>
      {progress && (
        <div className="navbar-items-container">
          <p className="nav-item">Score: {score}</p>
          <p className="nav-item">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
