import { useState } from 'react'
import './App.css'
import Card from './components/Card'

const App = ({ card }) => {

  // Define an array of `cards` that contain objects representing the questions and answer
  // for each card. We then use `card` props to pass the question and answer to Card component
  const [cards, setCards] = useState([
    { question: '1 MB = ? kB', answer: '1024 kB', image: 'https://retete-fitness.ro/wp-content/uploads/2023/02/is-15-kb-bigger-than-mb.jpg'},
    { question: 'A web address is usually known as …', answer: 'URL (Uniform Resource Locator)', image: 'https://www.lifewire.com/thmb/gX3YaiLpEbwHAT39gW0IqDV3ung=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/surf-internet-url-henrik5000-e-getty-images-56fa7f855f9b5829867282a9.jpg'},
    { question: 'USB is a ………………………… storage device', answer: 'Secondary', image: 'data:image/png;base64,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'},
  ]);

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
    if (cardOrder < cards.length - 1) {
      setCardOrder(cardOrder + 1);
    }
    setFlip(false);
  };

  const handlePreviousCard = () => {
    if (cardOrder > 0) {
      setCardOrder(cardOrder - 1);
    }
    setFlip(false);
  };

  return (
    <div className='App'>
      <h1>Computer Science Quiz</h1>
      <h3>How good are you at Basic Knowledge of Computer Science as a CS major?</h3>
      <h3>This online quiz has: {cards.length} questions</h3>
      <Card card = {cards[cardOrder]} isFlipped = {isFlipped} setFlip = {setFlip} />
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