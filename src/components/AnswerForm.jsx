import React, { useState } from 'react'

const AnswerForm = ({ input, status, handleChange, checkAns }) => {
  return (
    <div className='AnswerForm'>
      Guess the answer here:
      <input type="text" name="answer" placeholder="Place your answer here..." className={status} value={input} onChange={handleChange}></input>
      <button type='submit' className='submit-button' onClick={checkAns}>Submit Guess</button>
    </div>
  )
}

export default AnswerForm