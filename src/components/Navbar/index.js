import './index.css'

const Navbar = props => {
  const {score, timer} = props

  return (
    <nav className="nav-container">
      <ul className="list-container">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo-dim"
          />
        </li>
        <li className="list-item">
          <div className="score-container">
            <p className="score-counter">
              Score: <span>{score}</span>
            </p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-img"
            />
            <p>{timer} sec</p>
          </div>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
