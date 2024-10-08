import React, {useState} from 'react'
import './MobileScreen.css'

const MobileScreen = () => {
  const [playerName, setPlayerName] = useState('')
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [message, setMessage] = useState('')
  const [question, setQuestion] = useState({
    questionText: 'What is the capital of France?',
    options: ['A. Berlin', 'B. Madrid', 'C. Paris', 'D. Rome'],
    correctAnswer: 'C',
  })

  // Handle answer submission
  const handleSubmit = () => {
    if (selectedAnswer) {
      if (selectedAnswer === question.correctAnswer) {
        setMessage('Correct! Waiting for the next question...')
      } else {
        setMessage('Wrong answer, try again.')
      }
    }
  }

  return (
    <div className="mobile-screen">
      <h2>Join the Game</h2>
      {!playerName ? (
        <div>
          <label>Enter your name:</label>
          <input
            type="text"
            value={playerName}
            onChange={e => setPlayerName(e.target.value)}
          />
          <button onClick={() => setMessage('You have joined the game!')}>
            Join Game
          </button>
        </div>
      ) : (
        <div>
          <h2>Question: {question.questionText}</h2>
          {question.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => setSelectedAnswer(option)}
              />
              {option}
            </div>
          ))}
          <button onClick={handleSubmit}>Submit Answer</button>
          <div className="message">{message}</div>
        </div>
      )}
    </div>
  )
}

export default MobileScreen
