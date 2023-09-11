import { useState } from 'react'

import './App.css'
import AnswerForm from './components/AnswerForm';
import Card from './components/Card'

// Define an array of `cards` that contain objects representing the questions and answer
// for each card. We then use `card` props to pass the question and answer to Card component
import CardInfo from './components/cards-info.json'

const App = () => {

  // Input from user
  const [input, setInput] = useState('')
  // Keep track of what card and the information is being shown
  const [currentCard, setCurrentCard] = useState(CardInfo.cards[0])
  // useState() hooks to check whether the input is correct or not
  const [correct_ans, setCheckedAns] = useState('')
  // Count the streak
  const [streak, setStreak] = useState(0)
  // Count the max streak
  const [maxStreak, setMaxStreak] = useState(0)

  // The array of cards defined in the `useState` hook.
  // We also define a `cardOrder` variable to hold the index of the current card that we want to display.
  // In the return statement, we pass the current card to the `Card` component, and 2 buttons that
  // increments and decrements the `cardOrder` state when clicked.
  const [cardOrder, setCardOrder] = useState(0);

  // The `isFlipped` state variable is used to conditionally apply the flipped class to the card,
  // which controls whether the front or back of the card is displayed
  const [isFlipped, setFlip] = useState(false);

  // Loop through the cards array and set the `isFlipped` property of each card to false
  // before updating the state with the next card

  const handleNextCard = () => {
    if (cardOrder < CardInfo.cards.length - 1) {
      setCardOrder(cardOrder + 1);
    }
    setFlip(false); // Flip back to question face

    // Update information for new card
    getNextCard();
    // Reset the answer status to empty
    setCheckedAns('');
  };

  const handlePreviousCard = () => {
    if (cardOrder > 0) {
      setCardOrder(cardOrder - 1);
    }
    setFlip(false); // Flip back to question face

    // Update information for new card
    getNextCard();
    // Reset the answer status to empty
    setCheckedAns('');
  };

  /** 
   * Set the input back to empty and generate new solution for upcoming card
   */
  const getNextCard = () => {
    setInput(''); // Set input back to empty
    setCurrentCard(CardInfo.cards[cardOrder]); // Set new card question
  }

  /**
   * Handle input from user
   */
  const handleInput = (e) => setInput(e.target.value)

  /**
   * Check the answer from user if it's correct or wrong
   */
  const onCheckAnswer = () => {
    // Get the answer in lowercase form
    let trueAnswer = CardInfo.cards[cardOrder].answer.toLowerCase()
    // Get the index of open parenthesis
    // This is for extracting the real answer (exclude the additional information)
    let parenthesisIndex = trueAnswer.indexOf('(') == -1 ? trueAnswer.length : trueAnswer.indexOf(' (')
    // Check the result
    if (trueAnswer.substring(0, parenthesisIndex) != input.toLowerCase()) {
      setCheckedAns("wrong");
      setStreak(0);
    } else {
      setCheckedAns("correct");
      // Use a callback function to update both the 'streak' and 'maxStreak' state variables at the same time
      setStreak(prevStreak => {
        const newStreak = prevStreak + 1
        // Update 'maxStreak' variable
        setMaxStreak(Math.max(newStreak, maxStreak))
        // Return to update 'streak' variable
        return newStreak
      })
    }
  }

  /******************************************************************************/
  /*************************** RETURN STATEMENT TO UI ***************************/
  /******************************************************************************/
  return (
    <div className='App'>
      <h1>Computer Science Quiz</h1>
      <h3>How good are you at Basic Knowledge of Computer Science as a CS major?</h3>
      <h3>This online quiz has: {CardInfo.cards.length} questions</h3>
      <p>Current Streak: {streak}; Longest Streak: {maxStreak}</p>
      <Card card = {CardInfo.cards[cardOrder]} isFlipped = {isFlipped} setFlip = {setFlip} />
      <br></br>
      <AnswerForm
        input = {input}
        status = {correct_ans}
        handleChange = {handleInput}
        checkAns = {onCheckAnswer}
      />
      <br></br>
      <div className="NextOrBack">
        <button className='previousNavigate' onClick = {handlePreviousCard}>
          👈🏻 Back
        </button>
        <button className='nextNavigate' onClick = {handleNextCard}>
          Next 👉🏻
        </button>
      </div>
    </div>
  )
}

export default App;